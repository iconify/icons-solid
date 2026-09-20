import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o3-64fb4d.css';
import '../../css/r/r3xr9ab2m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="o3-64fb4d"/><path class="r3xr9ab2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:camera-1"} {...others} />);
}

export default Component;
