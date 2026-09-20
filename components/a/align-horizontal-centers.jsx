import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ikr4zbc5h.css';
import '../../css/r/rj5v1bbrm.css';
import '../../css/y/yvwyapbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ikr4zbc5h"/><rect transform="matrix(-1 0 0 1 19.75 7)" class="rj5v1bbrm"/><rect transform="matrix(-1 0 0 1 10.25 4.5)" class="yvwyapbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:align-horizontal-centers"} {...others} />);
}

export default Component;
