import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_a5gssuo.css';
import '../../css/j/jtowsomii.css';

const viewBox = {"width":21,"height":21};
const content = `<defs><path id="SVGVatqZbTj" class="g_a5gssuo"/></defs><g class="jtowsomii"><use href="#SVGVatqZbTj"/><use href="#SVGVatqZbTj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:document-justified"} {...others} />);
}

export default Component;
