import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifoyfinjb.css';
import '../../css/p/pxi__8h-n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ifoyfinjb"/><path clip-rule="evenodd" class="pxi__8h-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:stack-remove-16"} {...others} />);
}

export default Component;
