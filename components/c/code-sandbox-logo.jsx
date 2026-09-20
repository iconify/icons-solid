import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cy7yavbej.css';
import '../../css/w/wv0gd5x-g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="cy7yavbej"/><path class="wv0gd5x-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:code-sandbox-logo"} {...others} />);
}

export default Component;
