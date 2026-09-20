import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/r/rhk_vcboz.css';
import '../../css/i/in-ffcbqq.css';
import '../../css/n/ne-pb9qlb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="rhk_vcboz"/><path class="in-ffcbqq"/><path class="ne-pb9qlb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-outgoing"} {...others} />);
}

export default Component;
