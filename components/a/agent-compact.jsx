import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztoxc1bad.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ztoxc1bad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:agent-compact"} {...others} />);
}

export default Component;
