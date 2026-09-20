import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wllrp9urp.css';
import '../../css/c/czs93-zxq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wllrp9urp"/><path class="czs93-zxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:statue-of-liberty-line"} {...others} />);
}

export default Component;
