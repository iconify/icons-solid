import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewic4fbqt.css';
import '../../css/k/kunjmdq2f.css';
import '../../css/j/ja15efbfb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewic4fbqt"/><path class="kunjmdq2f"/><path class="ja15efbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:synchronous-condenser-20-bold"} {...others} />);
}

export default Component;
