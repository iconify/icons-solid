import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yypt_uvpx.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yypt_uvpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:android-outlined"} {...others} />);
}

export default Component;
