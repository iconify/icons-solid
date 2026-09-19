import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5asd1mya.css';
import '../../css/w/w893w9fet.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="z5asd1mya"/><path class="w893w9fet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:cloud-download-outlined"} {...others} />);
}

export default Component;
