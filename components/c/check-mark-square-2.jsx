import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/w1mv-saom.css';
import '../../css/v/v07i61__k.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="w1mv-saom"/><path class="v07i61__k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:check-mark-square-2"} {...others} />);
}

export default Component;
