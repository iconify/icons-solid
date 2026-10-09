import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxzbu2mcp.css';
import '../../css/l/lz8x8jbji.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cxzbu2mcp"/><path class="lz8x8jbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cylinder-48-bold"} {...others} />);
}

export default Component;
