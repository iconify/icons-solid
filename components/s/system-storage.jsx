import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dk71obc9n.css';
import '../../css/y/yuj_2st2s.css';
import '../../css/r/re1s79shu.css';
import '../../css/p/pje17r6po.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dk71obc9n"/><path class="yuj_2st2s"/><path class="re1s79shu"/><path class="pje17r6po"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-storage"} {...others} />);
}

export default Component;
