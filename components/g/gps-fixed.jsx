import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/d-enzo4yk.css';
import '../../css/x/xnh8vsbav.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="d-enzo4yk"/><path class="xnh8vsbav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:gps-fixed"} {...others} />);
}

export default Component;
