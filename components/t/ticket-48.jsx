import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlkz-3bot.css';
import '../../css/n/n827cbx-f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nlkz-3bot"/><path class="n827cbx-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ticket-48"} {...others} />);
}

export default Component;
