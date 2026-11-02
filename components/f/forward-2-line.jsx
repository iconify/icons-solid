import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ym7ac94ej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ym7ac94ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:forward-2-line"} {...others} />);
}

export default Component;
