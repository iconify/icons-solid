import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri8ga0brr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ri8ga0brr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:netease-music-fill"} {...others} />);
}

export default Component;
