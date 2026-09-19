import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezp74yeys.css';
import '../../css/a/a__s2g6zp.css';

const viewBox = {"width":80,"height":80};
const content = `<defs><path id="SVGcKbddeti" class="ezp74yeys"/></defs><g class="a__s2g6zp"><use href="#SVGcKbddeti"/><use href="#SVGcKbddeti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tilde-bold"} {...others} />);
}

export default Component;
