import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd26ri4fm.css';
import '../../css/v/vn40uv8sr.css';
import '../../css/s/ssu0d0bti.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qd26ri4fm"/><path class="vn40uv8sr"/><path class="ssu0d0bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:rocket-twotone"} {...others} />);
}

export default Component;
