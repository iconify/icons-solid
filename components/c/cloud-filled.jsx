import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3jxwfbha.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="p3jxwfbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:cloud-filled"} {...others} />);
}

export default Component;
