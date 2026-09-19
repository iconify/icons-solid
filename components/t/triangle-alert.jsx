import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jfv4xbbjw.css';
import '../../css/y/yrxj94hwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jfv4xbbjw"/><path class="yrxj94hwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:triangle-alert"} {...others} />);
}

export default Component;
