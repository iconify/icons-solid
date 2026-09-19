import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f5aheew-y.css';
import '../../css/p/puwp7-dtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f5aheew-y"/><path class="puwp7-dtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:login-circle-01"} {...others} />);
}

export default Component;
