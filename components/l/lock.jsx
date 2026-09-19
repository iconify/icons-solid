import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8x9iqblc.css';
import '../../css/p/plqc46bvd.css';
import '../../css/d/dvj1g-bqd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v8x9iqblc"/><path class="plqc46bvd"/><path class="dvj1g-bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lock"} {...others} />);
}

export default Component;
