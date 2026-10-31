import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgyhjzbke.css';
import '../../css/y/yg0b5l8tt.css';
import '../../css/z/z2riblnjp.css';
import '../../css/p/pa1r83rhh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xgyhjzbke"/><path class="yg0b5l8tt"/><path class="z2riblnjp"/><path class="pa1r83rhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:eco-tag-pop"} {...others} />);
}

export default Component;
