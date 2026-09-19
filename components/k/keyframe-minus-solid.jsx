import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-l1pd0_w.css';
import '../../css/z/zr9u3mbxy.css';
import '../../css/h/h-8trubgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="zr9u3mbxy"/><path class="h-8trubgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframe-minus-solid"} {...others} />);
}

export default Component;
