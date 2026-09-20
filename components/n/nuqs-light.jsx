import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uk0l00b2f.css';
import '../../css/d/dezuy7r0y.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><path class="uk0l00b2f"/><path class="dezuy7r0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nuqs-light"} {...others} />);
}

export default Component;
