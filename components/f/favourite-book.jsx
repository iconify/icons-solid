import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a-pi4vqeb.css';
import '../../css/e/eciy7-bwj.css';
import '../../css/e/e3xegxdul.css';
import '../../css/k/kd2q2mdzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="a-pi4vqeb"/><path class="eciy7-bwj"/><path class="e3xegxdul"/><path class="kd2q2mdzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:favourite-book"} {...others} />);
}

export default Component;
