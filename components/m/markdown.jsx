import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl6x-yv6m.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="pl6x-yv6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:markdown"} {...others} />);
}

export default Component;
