import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-r03e0fh.css';
import '../../css/f/f4wongbjq.css';
import '../../css/t/tir5l0bfj.css';
import '../../css/t/ty4swsb0t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k-r03e0fh"/><path class="f4wongbjq"/><path class="tir5l0bfj"/><path class="ty4swsb0t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:discord"} {...others} />);
}

export default Component;
