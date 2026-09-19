import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfu2u4csl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="rfu2u4csl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:zhihu-square-filled"} {...others} />);
}

export default Component;
