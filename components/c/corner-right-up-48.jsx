import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdt97jb-t.css';
import '../../css/x/xj1iovt4w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zdt97jb-t"/><path class="xj1iovt4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-right-up-48"} {...others} />);
}

export default Component;
