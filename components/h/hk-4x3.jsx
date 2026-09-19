import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfmuwbcef.css';
import '../../css/w/wt4-8acnn.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="jfmuwbcef"/><path id="SVG5tfvBPpj" class="wt4-8acnn"/><use href="#SVG5tfvBPpj" transform="rotate(72 312.5 243.5)"/><use href="#SVG5tfvBPpj" transform="rotate(144 312.5 243.5)"/><use href="#SVG5tfvBPpj" transform="rotate(216 312.5 243.5)"/><use href="#SVG5tfvBPpj" transform="rotate(288 312.5 243.5)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:hk-4x3"} {...others} />);
}

export default Component;
