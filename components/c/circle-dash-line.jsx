import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q63a2rbui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q63a2rbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circle-dash-line"} {...others} />);
}

export default Component;
