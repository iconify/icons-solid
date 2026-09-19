import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2p2k_glq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m2p2k_glq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ballottscriptx"} {...others} />);
}

export default Component;
