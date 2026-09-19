import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp6gv5bfm.css';
import '../../css/q/ql5n44bqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wp6gv5bfm"/><path class="ql5n44bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sword-alt-filled"} {...others} />);
}

export default Component;
