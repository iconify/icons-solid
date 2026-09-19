import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbj496bhl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vbj496bhl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:fullscreen-exit-filled"} {...others} />);
}

export default Component;
