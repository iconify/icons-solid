import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewqvwvboj.css';
import '../../css/s/s59_s2b3k.css';
import '../../css/u/uzrftzatq.css';
import '../../css/z/zzxdhbbgb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ewqvwvboj"/><path class="s59_s2b3k"/><path class="uzrftzatq"/><path class="zzxdhbbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:opentelemetry-wordmark"} {...others} />);
}

export default Component;
