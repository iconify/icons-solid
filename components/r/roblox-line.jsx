import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v569z1whg.css';
import '../../css/s/sy9cqcbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v569z1whg"/><path class="sy9cqcbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:roblox-line"} {...others} />);
}

export default Component;
