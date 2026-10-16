import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqyxvub6s.css';
import '../../css/c/cio1nufgx.css';

const viewBox = {"width":156,"height":41};
const content = `<g clip-path="url(#SVGHYmOteiq)"><path class="jqyxvub6s"/></g><defs><clipPath id="SVGHYmOteiq"><path class="cio1nufgx"/></clipPath></defs>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:browserless-light"} {...others} />);
}

export default Component;
