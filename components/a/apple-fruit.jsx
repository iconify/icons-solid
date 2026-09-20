import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jew2j0b3x.css';
import '../../css/u/u6dm3mb1b.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="jew2j0b3x"/><path class="u6dm3mb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:apple-fruit"} {...others} />);
}

export default Component;
