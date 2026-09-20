import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bun4fvbdj.css';
import '../../css/u/uqjvq3bgx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bun4fvbdj"/><path class="uqjvq3bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scanopy"} {...others} />);
}

export default Component;
