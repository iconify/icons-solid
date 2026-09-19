import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efs7akbeh.css';
import '../../css/b/bmkr64bli.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="efs7akbeh"/><path class="bmkr64bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:users"} {...others} />);
}

export default Component;
