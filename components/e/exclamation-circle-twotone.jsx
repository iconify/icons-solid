import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/g/gjbusdbhw.css';
import '../../css/i/io6m8-o3i.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="gjbusdbhw"/><path class="io6m8-o3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:exclamation-circle-twotone"} {...others} />);
}

export default Component;
