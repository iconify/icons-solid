import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg6j7hbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jg6j7hbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-line-line"} {...others} />);
}

export default Component;
