import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzof660bj.css';
import '../../css/y/yyppkb8-k.css';
import '../../css/w/w-uqq1-3d.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vzof660bj"/><path class="yyppkb8-k"/><path class="w-uqq1-3d"/><path class="qh3-d7bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-battery-check-20"} {...others} />);
}

export default Component;
