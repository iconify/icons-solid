import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ygpzi6bzb.css';
import '../../css/l/lzc0iw4ot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ygpzi6bzb"/><path class="lzc0iw4ot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-up-line-duotone"} {...others} />);
}

export default Component;
