import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlfw6ca1t.css';
import '../../css/h/hglx5hbva.css';
import '../../css/s/sx_i0qbyz.css';

const viewBox = {"width":28.132,"height":28.132};
const content = `<path class="wlfw6ca1t"/><path class="hglx5hbva"/><path class="sx_i0qbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:axa"} {...others} />);
}

export default Component;
