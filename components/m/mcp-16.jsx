import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v545msb3x.css';
import '../../css/i/izcv4zh7x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v545msb3x"/><path class="izcv4zh7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:mcp-16"} {...others} />);
}

export default Component;
