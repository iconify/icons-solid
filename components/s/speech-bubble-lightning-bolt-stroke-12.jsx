import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cu8-jub8h.css';
import '../../css/m/m0eb90q8b.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="cu8-jub8h"/><path class="m0eb90q8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:speech-bubble-lightning-bolt-stroke-12"} {...others} />);
}

export default Component;
