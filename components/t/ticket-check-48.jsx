import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlkz-3bot.css';
import '../../css/g/gx580lbzp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nlkz-3bot"/><path class="gx580lbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ticket-check-48"} {...others} />);
}

export default Component;
