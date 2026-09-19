import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8_qb9bev.css';
import '../../css/c/cjf6f3gxf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="u8_qb9bev"/><path class="cjf6f3gxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:layout-twotone"} {...others} />);
}

export default Component;
