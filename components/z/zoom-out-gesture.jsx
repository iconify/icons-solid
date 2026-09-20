import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxbgvkb6n.css';
import '../../css/k/k0nzsl_6c.css';
import '../../css/w/w30g80b8v.css';
import '../../css/a/a18g77b4g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="fxbgvkb6n"/><path class="k0nzsl_6c"/><path class="w30g80b8v"/><path class="a18g77b4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:zoom-out-gesture"} {...others} />);
}

export default Component;
