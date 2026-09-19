import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9-uvibgd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l9-uvibgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:ellipsis-horizontal"} {...others} />);
}

export default Component;
