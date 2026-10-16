import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsmhpgwcs.css';
import '../../css/f/fc_5vwb2s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsmhpgwcs"/><path class="fc_5vwb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aspect-ratio-48"} {...others} />);
}

export default Component;
