import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/p/pqia5ybpf.css';
import '../../css/y/yg91g4wbg.css';
import '../../css/t/tmt74cc5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><ellipse transform="matrix(-1 0 0 1 20 2)" class="pqia5ybpf"/><path class="yg91g4wbg"/><path class="tmt74cc5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:coin"} {...others} />);
}

export default Component;
