import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjtwhsb_o.css';
import '../../css/x/xg42qpbkn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fjtwhsb_o"/><path class="xg42qpbkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-top-48"} {...others} />);
}

export default Component;
