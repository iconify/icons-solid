import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x13lcabyi.css';
import '../../css/o/oi3fybc0n.css';
import '../../css/w/w9t884b9p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x13lcabyi"/><path class="oi3fybc0n"/><path class="w9t884b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repeat-48"} {...others} />);
}

export default Component;
