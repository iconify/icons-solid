import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/x/xtthexbok.css';
import '../../css/q/qy8-hybaj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="xtthexbok"/><path class="qy8-hybaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:smile-twotone"} {...others} />);
}

export default Component;
