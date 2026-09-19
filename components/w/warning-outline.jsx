import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7-96frbe.css';
import '../../css/j/jo95-poua.css';
import '../../css/i/iw3w-abnu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z7-96frbe"/><path class="jo95-poua"/><path class="iw3w-abnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:warning-outline"} {...others} />);
}

export default Component;
