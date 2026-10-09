import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m62_8ratf.css';
import '../../css/y/yax8ykbmj.css';
import '../../css/d/d2ndz6b2q.css';
import '../../css/t/tfcewbbzn.css';
import '../../css/j/jwxgdac6b.css';
import '../../css/v/vxcxjnbsb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m62_8ratf"/><path class="yax8ykbmj"/><path class="d2ndz6b2q"/><path class="tfcewbbzn"/><path class="jwxgdac6b"/><path class="vxcxjnbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chiller-20"} {...others} />);
}

export default Component;
