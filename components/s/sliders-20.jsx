import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwv2wmb8a.css';
import '../../css/w/wx6yz0xkc.css';
import '../../css/p/pygpe6bmd.css';
import '../../css/u/ut938kb3x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vwv2wmb8a"/><path class="wx6yz0xkc"/><path class="pygpe6bmd"/><path class="ut938kb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sliders-20"} {...others} />);
}

export default Component;
