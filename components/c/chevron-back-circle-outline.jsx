import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-tflgzje.css';
import '../../css/w/wv95f72ao.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q-tflgzje"/><path class="wv95f72ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:chevron-back-circle-outline"} {...others} />);
}

export default Component;
