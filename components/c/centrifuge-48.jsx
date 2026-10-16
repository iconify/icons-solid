import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl-lwcbmt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sl-lwcbmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:centrifuge-48"} {...others} />);
}

export default Component;
