import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faw1_xb-c.css';
import '../../css/d/dyv57sbui.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="faw1_xb-c"/><path class="dyv57sbui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fusion-48"} {...others} />);
}

export default Component;
