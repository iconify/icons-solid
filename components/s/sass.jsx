import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gi7bas88e.css';
import '../../css/d/d-s91m4nw.css';
import '../../css/r/rj4k8tb_e.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="gi7bas88e"/><g clip-path="url(#SVG2V0vHQRw)"><path class="d-s91m4nw"/></g><defs><clipPath id="SVG2V0vHQRw"><path class="rj4k8tb_e"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:sass"} {...others} />);
}

export default Component;
