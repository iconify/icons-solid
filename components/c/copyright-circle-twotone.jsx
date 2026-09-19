import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/s/sb41w-beq.css';
import '../../css/x/xt06buell.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="sb41w-beq"/><path class="xt06buell"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:copyright-circle-twotone"} {...others} />);
}

export default Component;
