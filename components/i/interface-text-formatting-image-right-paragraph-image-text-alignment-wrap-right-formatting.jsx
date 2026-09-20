import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p64lgabpt.css';
import '../../css/b/b21do6byx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="p64lgabpt"/><rect transform="rotate(-180 10.5 4)" class="b21do6byx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-image-right-paragraph-image-text-alignment-wrap-right-formatting"} {...others} />);
}

export default Component;
