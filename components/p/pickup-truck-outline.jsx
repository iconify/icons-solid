import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8wgsx-ss.css';
import '../../css/v/v-u4xgb6a.css';
import '../../css/k/k0zq50brr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b8wgsx-ss"/><path clip-rule="evenodd" class="v-u4xgb6a"/><path class="k0zq50brr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pickup-truck-outline"} {...others} />);
}

export default Component;
