import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/e/enk8qtlox.css';
import '../../css/j/je1b02vbz.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="enk8qtlox"/><path class="je1b02vbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:caravan"} {...others} />);
}

export default Component;
