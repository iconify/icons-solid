import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dzc1y6b0m.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/y/yhkdl0bgf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dzc1y6b0m"/><circle class="shu3xdl9q"/><path class="yhkdl0bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-web-browsing"} {...others} />);
}

export default Component;
