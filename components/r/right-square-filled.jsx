import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8-fn9hwo.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="f8-fn9hwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:right-square-filled"} {...others} />);
}

export default Component;
