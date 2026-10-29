import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/prnexjb1i.css';
import '../../css/r/rvo8e2pwf.css';
import '../../css/l/lx6vztc2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="prnexjb1i"/><path class="rvo8e2pwf wm-shadow"/><path class="lx6vztc2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lamp-desk-engrave"} {...others} />);
}

export default Component;
