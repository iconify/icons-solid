import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkihj-w6g.css';
import '../../css/c/ce_vlmbjr.css';
import '../../css/a/al014_b-b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkihj-w6g"/><path class="ce_vlmbjr"/><path class="al014_b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-x-20"} {...others} />);
}

export default Component;
