import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dsbz12bru.css';
import '../../css/p/pg-j1evyr.css';
import '../../css/c/cfmykrbut.css';
import '../../css/f/fjsedw-yo.css';
import '../../css/t/tntr6ebzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dsbz12bru"/><path class="pg-j1evyr wm-shine"/><path class="cfmykrbut wm-k"/><path class="fjsedw-yo wm-a"/><path class="tntr6ebzv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:test-tube"} {...others} />);
}

export default Component;
