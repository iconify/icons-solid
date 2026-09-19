import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8z2t83mb.css';
import '../../css/o/onaqt0bbp.css';
import '../../css/l/l37k14u2h.css';
import '../../css/t/twpxdwbks.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r8z2t83mb"/><path class="onaqt0bbp"/><path class="l37k14u2h"/><path class="twpxdwbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:japaneseangrymask"} {...others} />);
}

export default Component;
