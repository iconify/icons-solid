import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p0w9xzp5p.css';
import '../../css/x/xbu3phb9u.css';
import '../../css/p/pfslbpo-y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p0w9xzp5p"/><path class="xbu3phb9u"/><path class="pfslbpo-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:binoculars-outline"} {...others} />);
}

export default Component;
