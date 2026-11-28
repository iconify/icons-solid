import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/elbfjcb4r.css';
import '../../css/u/u48862bgk.css';
import '../../css/a/af_02r1sn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="elbfjcb4r"/><path class="u48862bgk"/><path class="af_02r1sn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:crown"} {...others} />);
}

export default Component;
