import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yijx6hbni.css';
import '../../css/i/imsjpsbtj.css';
import '../../css/g/g1s8iiuoa.css';
import '../../css/r/r_9v_xb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="yijx6hbni"/><path class="imsjpsbtj"/><path class="g1s8iiuoa"/><path class="r_9v_xb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:chrome"} {...others} />);
}

export default Component;
