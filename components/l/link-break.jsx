import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyf-hkbzb.css';
import '../../css/e/erzf03bmv.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGuyku8X7A)"><path clip-rule="evenodd" class="jyf-hkbzb"/></g><defs><clipPath id="SVGuyku8X7A"><path class="erzf03bmv"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:link-break"} {...others} />);
}

export default Component;
