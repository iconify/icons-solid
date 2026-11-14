import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ixnrqsbfw.css';
import '../../css/v/vpyj70zqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ixnrqsbfw"/><path class="vpyj70zqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:setup-01"} {...others} />);
}

export default Component;
