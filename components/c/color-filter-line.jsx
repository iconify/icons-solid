import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jom4w58hj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jom4w58hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:color-filter-line"} {...others} />);
}

export default Component;
