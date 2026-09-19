import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/u/uxni1ac_w.css';
import '../../css/z/zurui3ban.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="uxni1ac_w"/><path class="zurui3ban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:minus-circle-twotone"} {...others} />);
}

export default Component;
