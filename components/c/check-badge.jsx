import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cs4j3qbaq.css';
import '../../css/v/vu0zlj5yr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="cs4j3qbaq"/><path class="vu0zlj5yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:check-badge"} {...others} />);
}

export default Component;
