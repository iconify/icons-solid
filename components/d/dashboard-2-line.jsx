import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6n8tjbud.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6n8tjbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dashboard-2-line"} {...others} />);
}

export default Component;
