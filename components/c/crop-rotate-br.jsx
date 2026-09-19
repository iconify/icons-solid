import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j14jz-k9s.css';
import '../../css/z/z2mjhdhbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j14jz-k9s"/><path class="z2mjhdhbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:crop-rotate-br"} {...others} />);
}

export default Component;
