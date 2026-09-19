import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/c/cdyq_jbmi.css';
import '../../css/i/ib167_bsp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="cdyq_jbmi"/><path class="ib167_bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:plus-circle-twotone"} {...others} />);
}

export default Component;
