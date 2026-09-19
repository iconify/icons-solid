import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufie9ebgy.css';
import '../../css/z/zep2h7-hf.css';
import '../../css/h/hbs97qgzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ufie9ebgy"><path class="zep2h7-hf"/><path clip-rule="evenodd" class="hbs97qgzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:frame-select"} {...others} />);
}

export default Component;
