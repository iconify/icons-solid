import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzywbeb3l.css';
import '../../css/x/xfwzrg6lm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rzywbeb3l"/><path class="xfwzrg6lm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:camera"} {...others} />);
}

export default Component;
