import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh5lc4bpf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fh5lc4bpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:instagram-filled"} {...others} />);
}

export default Component;
