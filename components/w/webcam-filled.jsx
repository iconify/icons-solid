import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz7555nvh.css';
import '../../css/q/q4tdn3ben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz7555nvh"/><path class="q4tdn3ben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:webcam-filled"} {...others} />);
}

export default Component;
