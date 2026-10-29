import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tn1t_db_j.css';
import '../../css/c/c8kirdbxf.css';
import '../../css/q/q4r6x_iat.css';
import '../../css/o/om8y02bow.css';
import '../../css/z/z4wqfj-go.css';
import '../../css/w/wq3-yy48c.css';
import '../../css/q/qafpmgbub.css';
import '../../css/t/two9m6buh.css';
import '../../css/j/jrcnzga3p.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tn1t_db_j wm-shadow"/><path class="c8kirdbxf"/><path class="q4r6x_iat"/><path class="om8y02bow"/><path class="z4wqfj-go"/><path class="wq3-yy48c"/><path class="qafpmgbub"/><path class="two9m6buh wm-shine"/><path class="jrcnzga3p wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:lamp"} {...others} />);
}

export default Component;
