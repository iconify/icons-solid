import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bpan5tc-q.css';
import '../../css/w/w4sd5pbjg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bpan5tc-q"/><rect transform="rotate(-90 7 2.5)" class="w4sd5pbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-image-top-insert-paragraph-image-text-align-top-formatting"} {...others} />);
}

export default Component;
