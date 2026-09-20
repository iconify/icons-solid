import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hk1jobb2l.css';
import '../../css/d/dk52h9d0d.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="hk1jobb2l"/><path class="dk52h9d0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:fishing-hook"} {...others} />);
}

export default Component;
