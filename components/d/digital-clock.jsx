import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0jf3ybrz.css';
import '../../css/s/skwzrbbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f0jf3ybrz"/><path class="skwzrbbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:digital-clock"} {...others} />);
}

export default Component;
