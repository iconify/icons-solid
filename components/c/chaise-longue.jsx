import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/u7vgjzb1d.css';
import '../../css/p/pt1vl9sze.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="u7vgjzb1d"/><path class="pt1vl9sze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:chaise-longue"} {...others} />);
}

export default Component;
