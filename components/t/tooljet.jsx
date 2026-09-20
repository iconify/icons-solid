import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilfwa6ghy.css';
import '../../css/p/p56lewgoe.css';
import '../../css/t/t5n_crbii.css';

const viewBox = {"width":131,"height":22};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG3LbICbVO)"><path class="ilfwa6ghy"/><path class="p56lewgoe"/></g><defs><clipPath id="SVG3LbICbVO"><rect class="t5n_crbii"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tooljet"} {...others} />);
}

export default Component;
