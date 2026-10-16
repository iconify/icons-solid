import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5452nbip.css';
import '../../css/e/ef2pxlb6n.css';
import '../../css/q/q077labmk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n5452nbip"/><path class="ef2pxlb6n"/><path class="q077labmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-tanker-20"} {...others} />);
}

export default Component;
