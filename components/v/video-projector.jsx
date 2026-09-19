import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/urmicr44l.css';
import '../../css/n/nz6tfcbdx.css';
import '../../css/f/f1dep5d6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="urmicr44l"/><path class="nz6tfcbdx"/><path class="f1dep5d6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:video-projector"} {...others} />);
}

export default Component;
