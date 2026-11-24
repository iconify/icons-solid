import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh6j3gbjg.css';
import '../../css/o/oed997bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uh6j3gbjg"/><path class="oed997bmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:camera-off-filled"} {...others} />);
}

export default Component;
