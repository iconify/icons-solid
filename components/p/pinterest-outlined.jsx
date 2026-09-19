import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ikc3oob9k.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ikc3oob9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:pinterest-outlined"} {...others} />);
}

export default Component;
