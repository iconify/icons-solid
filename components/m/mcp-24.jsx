import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz4uhub5s.css';
import '../../css/l/l8wwf1bsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cz4uhub5s"/><path class="l8wwf1bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:mcp-24"} {...others} />);
}

export default Component;
