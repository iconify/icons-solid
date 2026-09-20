import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcek26bpu.css';
import '../../css/p/p__5xsbkk.css';
import '../../css/y/ysrizo7oy.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="gcek26bpu"/><path class="p__5xsbkk"/><path class="ysrizo7oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-education-filled"} {...others} />);
}

export default Component;
