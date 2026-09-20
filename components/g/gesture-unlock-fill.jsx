import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvxx9rbxb.css';
import '../../css/i/iz0l5_b0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zvxx9rbxb"/><path clip-rule="evenodd" class="iz0l5_b0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:gesture-unlock-fill"} {...others} />);
}

export default Component;
