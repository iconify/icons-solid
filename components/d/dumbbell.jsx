import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/ji0ukybgc.css';
import '../../css/i/ibczrqbly.css';
import '../../css/d/drbfuob2v.css';
import '../../css/i/iyr7fkjbg.css';
import '../../css/t/tfxfg-kbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ji0ukybgc wm-shadow"/><path class="ibczrqbly"/><path class="drbfuob2v"/><path class="iyr7fkjbg"/><path class="tfxfg-kbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:dumbbell"} {...others} />);
}

export default Component;
