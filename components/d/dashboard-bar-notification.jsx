import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/c/c5kq4ybgs.css';
import '../../css/w/wjp174m-x.css';
import '../../css/d/d9dxm9bjr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="c5kq4ybgs"/><path class="wjp174m-x"/><path class="d9dxm9bjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:dashboard-bar-notification"} {...others} />);
}

export default Component;
