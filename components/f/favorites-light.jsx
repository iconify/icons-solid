import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c7pmryb3o.css';
import '../../css/f/f-7yf7b_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="c7pmryb3o"/><path class="f-7yf7b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:favorites-light"} {...others} />);
}

export default Component;
