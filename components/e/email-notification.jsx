import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/caeecabqw.css';
import '../../css/e/eti1awbyg.css';
import '../../css/l/lm2y_hbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="caeecabqw"/><path class="eti1awbyg"/><circle class="lm2y_hbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:email-notification"} {...others} />);
}

export default Component;
