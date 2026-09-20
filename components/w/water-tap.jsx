import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vjq39j9el.css';
import '../../css/x/xndopnbjj.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="vjq39j9el"/><path class="xndopnbjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:water-tap"} {...others} />);
}

export default Component;
