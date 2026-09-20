import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c7zkydbij.css';
import '../../css/c/ct9fr6bou.css';
import '../../css/s/shz66wb0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c7zkydbij"/><path class="ct9fr6bou"/><path class="shz66wb0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:megaphone-a"} {...others} />);
}

export default Component;
