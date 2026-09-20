import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wr9dlac0u.css';
import '../../css/q/qb5ipy-9h.css';

const viewBox = {"width":201,"height":201};
const content = `<g class="ft5dv1b6b"><path class="wr9dlac0u"/><path clip-rule="evenodd" class="qb5ipy-9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:binance"} {...others} />);
}

export default Component;
