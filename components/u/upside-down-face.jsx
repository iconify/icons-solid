import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dsi4yebmy.css';
import '../../css/z/zg32i5q-m.css';
import '../../css/f/f-db-9jnx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dsi4yebmy"/><path class="zg32i5q-m"/><path class="f-db-9jnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:upside-down-face"} {...others} />);
}

export default Component;
