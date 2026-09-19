import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib167_bsp.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ib167_bsp"/><path class="yv_brepse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:plus-circle-outlined"} {...others} />);
}

export default Component;
