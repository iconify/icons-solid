import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aat5akb2r.css';
import '../../css/x/xpyjtvwnm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aat5akb2r"/><path class="xpyjtvwnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-high-20"} {...others} />);
}

export default Component;
