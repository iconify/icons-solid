import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzuu6vb4l.css';
import '../../css/p/pin2338sh.css';

const viewBox = {"width":300,"height":300};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGDTtXObki)"><path clip-rule="evenodd" class="kzuu6vb4l"/></g><defs><clipPath id="SVGDTtXObki"><path class="pin2338sh"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:polar-dark"} {...others} />);
}

export default Component;
