import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfmxxebmr.css';
import '../../css/j/j6k0-dpwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfmxxebmr"/><path class="j6k0-dpwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:microphone-alt-filled"} {...others} />);
}

export default Component;
