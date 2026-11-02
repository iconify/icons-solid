import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh88yn8ao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zh88yn8ao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circle-arrow-out-up-left-fill"} {...others} />);
}

export default Component;
