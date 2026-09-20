import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx-2lwb9f.css';
import '../../css/a/atjk8mbde.css';
import '../../css/a/a9o5t_b5e.css';
import '../../css/p/pnfsjvx9q.css';

const viewBox = {"width":28,"height":28};
const content = `<path class="bx-2lwb9f"/><g class="atjk8mbde"><path class="a9o5t_b5e"/><path class="pnfsjvx9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:geogebra"} {...others} />);
}

export default Component;
