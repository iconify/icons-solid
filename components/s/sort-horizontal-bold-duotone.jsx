import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwdyy_0gr.css';
import '../../css/j/jdu2jtbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwdyy_0gr"/><path class="jdu2jtbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-horizontal-bold-duotone"} {...others} />);
}

export default Component;
