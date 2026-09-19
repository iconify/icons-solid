import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9xelbb4d.css';
import '../../css/y/yv_brepse.css';
import '../../css/l/lpz0abbod.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k9xelbb4d"/><path class="yv_brepse"/><path class="lpz0abbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:right-circle-twotone"} {...others} />);
}

export default Component;
