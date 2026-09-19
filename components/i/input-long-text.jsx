import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbyvyzbcv.css';
import '../../css/j/j9o-hybkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bbyvyzbcv"/><path class="j9o-hybkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:input-long-text"} {...others} />);
}

export default Component;
