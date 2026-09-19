import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jwu_f6b9n.css';
import '../../css/c/c__hxy7lt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="jwu_f6b9n"/><path class="c__hxy7lt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-1"} {...others} />);
}

export default Component;
