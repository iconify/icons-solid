import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l73ftcc0i.css';
import '../../css/v/vimw34l9o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l73ftcc0i"/><path class="vimw34l9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-charging-48"} {...others} />);
}

export default Component;
