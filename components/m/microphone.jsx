import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blh-xxc1n.css';
import '../../css/m/m3q-h-bdw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="blh-xxc1n"/><path class="m3q-h-bdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:microphone"} {...others} />);
}

export default Component;
