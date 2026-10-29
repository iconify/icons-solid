import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hx238obel.css';
import '../../css/k/kbd8pobja.css';
import '../../css/r/r6zdo0mwd.css';
import '../../css/z/zki05l2_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hx238obel"/><path class="kbd8pobja wm-shadow"/><path class="r6zdo0mwd"/><path class="zki05l2_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clover-engrave"} {...others} />);
}

export default Component;
