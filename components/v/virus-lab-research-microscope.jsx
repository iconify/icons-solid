import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eeu2w8bsf.css';
import '../../css/w/w05rmesnj.css';
import '../../css/l/llhjjj3hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eeu2w8bsf"/><path class="w05rmesnj"/><path class="llhjjj3hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:virus-lab-research-microscope"} {...others} />);
}

export default Component;
