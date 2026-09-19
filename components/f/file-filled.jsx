import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swhrr-0bj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="swhrr-0bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-filled"} {...others} />);
}

export default Component;
