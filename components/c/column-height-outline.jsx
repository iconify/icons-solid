import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_8o_25te.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="g_8o_25te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:column-height-outline"} {...others} />);
}

export default Component;
