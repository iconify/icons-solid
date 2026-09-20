import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/weo8h2d-l.css';
import '../../css/j/ju4d0lblh.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="weo8h2d-l"/><path class="ju4d0lblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:user-7"} {...others} />);
}

export default Component;
