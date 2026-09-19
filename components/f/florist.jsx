import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3xearisc.css';
import '../../css/g/ga3pmjrdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d3xearisc"/><path class="ga3pmjrdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:florist"} {...others} />);
}

export default Component;
