import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df57ckmtv.css';
import '../../css/d/df24pzbxt.css';
import '../../css/c/co_gutb3f.css';
import '../../css/m/mamssyaqq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="df57ckmtv"/><path class="df24pzbxt"/><path class="co_gutb3f"/><path class="mamssyaqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hourglass"} {...others} />);
}

export default Component;
