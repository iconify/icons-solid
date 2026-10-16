import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z53h8x6cn.css';
import '../../css/j/j58ps0w4k.css';
import '../../css/o/ob5windhy.css';
import '../../css/e/eiaru3xjb.css';
import '../../css/n/np5h__d8v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z53h8x6cn"/><path class="j58ps0w4k"/><path class="ob5windhy"/><path class="eiaru3xjb"/><path class="np5h__d8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:surge-arrester-48"} {...others} />);
}

export default Component;
