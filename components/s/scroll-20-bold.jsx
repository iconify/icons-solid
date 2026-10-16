import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2gs_oovh.css';
import '../../css/r/rme-dq93w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z2gs_oovh"/><path class="rme-dq93w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scroll-20-bold"} {...others} />);
}

export default Component;
