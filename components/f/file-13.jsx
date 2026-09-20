import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqf9kac9b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yqf9kac9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:file-13"} {...others} />);
}

export default Component;
