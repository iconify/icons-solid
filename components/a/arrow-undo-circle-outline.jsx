import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juv3elbto.css';
import '../../css/q/q-tflgzje.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="juv3elbto"/><path class="q-tflgzje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:arrow-undo-circle-outline"} {...others} />);
}

export default Component;
