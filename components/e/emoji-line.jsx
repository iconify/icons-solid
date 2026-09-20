import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmizg-b1r.css';
import '../../css/z/zc4wqgbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmizg-b1r"/><path class="zc4wqgbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:emoji-line"} {...others} />);
}

export default Component;
