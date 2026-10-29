import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vhis9r0cf.css';
import '../../css/g/g3kyg4buc.css';
import '../../css/r/rhvdhhbhs.css';
import '../../css/x/xdod-xv-c.css';
import '../../css/e/ebgwytbri.css';
import '../../css/m/m2nu40i7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="vhis9r0cf wm-shadow"/><path class="g3kyg4buc"/><path class="rhvdhhbhs"/><path class="xdod-xv-c"/><path class="ebgwytbri wm-shine"/><path class="m2nu40i7l wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:align-center"} {...others} />);
}

export default Component;
