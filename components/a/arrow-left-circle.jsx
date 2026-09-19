import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dsbl1nj-w.css';
import '../../css/x/xcetmgeuw.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#svgIDa)"><path clip-rule="evenodd" class="dsbl1nj-w"/></g><defs><clipPath id="svgIDa"><path class="xcetmgeuw"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:arrow-left-circle"} {...others} />);
}

export default Component;
