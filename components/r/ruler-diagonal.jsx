import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijdv2nm9r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ijdv2nm9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:ruler-diagonal"} {...others} />);
}

export default Component;
