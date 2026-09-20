import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_tqupv-j.css';
import '../../css/v/v0w363bys.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="q_tqupv-j"/><path class="v0w363bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:remove-15m"} {...others} />);
}

export default Component;
