import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/akpyus1jy.css';
import '../../css/b/bwm8uxbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="akpyus1jy"/><path class="bwm8uxbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:cake"} {...others} />);
}

export default Component;
