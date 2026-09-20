import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/f/fbvfgha4d.css';
import '../../css/g/ga7vwcnyn.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="fbvfgha4d"/><path class="ga7vwcnyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:hammer-drill"} {...others} />);
}

export default Component;
