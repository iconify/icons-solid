import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kgeg8qb_c.css';
import '../../css/h/hk4x32b-e.css';
import '../../css/z/zsm68ej_i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kgeg8qb_c"/><path class="hk4x32b-e"/><path class="zsm68ej_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-running-facing-right"} {...others} />);
}

export default Component;
