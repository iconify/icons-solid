import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i4-j5lbrm.css';
import '../../css/k/kh7n8zb0n.css';
import '../../css/w/w7fewvy9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i4-j5lbrm"/><path class="kh7n8zb0n"/><path class="w7fewvy9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-face-mask-3"} {...others} />);
}

export default Component;
