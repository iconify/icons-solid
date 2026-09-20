import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is7he1yqf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="is7he1yqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:draggable-horizontal"} {...others} />);
}

export default Component;
