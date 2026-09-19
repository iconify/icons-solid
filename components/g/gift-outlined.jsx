import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-u9j3wiw.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k-u9j3wiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:gift-outlined"} {...others} />);
}

export default Component;
