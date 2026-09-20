import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qi0nwc0pa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qi0nwc0pa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:selector-vertical-line"} {...others} />);
}

export default Component;
