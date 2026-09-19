import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z88dnnb8s.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="z88dnnb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:up-circle-filled"} {...others} />);
}

export default Component;
