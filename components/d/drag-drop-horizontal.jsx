import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vflv5-bqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vflv5-bqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drag-drop-horizontal"} {...others} />);
}

export default Component;
