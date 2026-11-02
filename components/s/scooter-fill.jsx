import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj3r7hxgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj3r7hxgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:scooter-fill"} {...others} />);
}

export default Component;
