import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8ikm3bfk.css';
import '../../css/p/p39-tabus.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8ikm3bfk"/><path class="p39-tabus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wrist-watch-round-filled"} {...others} />);
}

export default Component;
