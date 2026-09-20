import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl8ogjbin.css';
import '../../css/v/vbn5-wb4u.css';

const viewBox = {"width":1440,"height":810};
const content = `<defs><clipPath id="SVG6nCoMc7C"><path class="zl8ogjbin"/></clipPath></defs><g clip-path="url(#SVG6nCoMc7C)"><path class="vbn5-wb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:farmsent"} {...others} />);
}

export default Component;
