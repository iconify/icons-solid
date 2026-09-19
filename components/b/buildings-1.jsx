import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nx-mj0xoc.css';
import '../../css/s/s7xm1ubhg.css';
import '../../css/m/m6fxu57dt.css';
import '../../css/c/cf-mxkbsh.css';
import '../../css/i/iwtfi9b9a.css';
import '../../css/l/l5zq7bcwk.css';
import '../../css/a/aw3_k-l2u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="nx-mj0xoc"/><path class="s7xm1ubhg"/><path class="m6fxu57dt"/><path class="cf-mxkbsh"/><path class="iwtfi9b9a"/><path class="l5zq7bcwk"/><path class="aw3_k-l2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:buildings-1"} {...others} />);
}

export default Component;
