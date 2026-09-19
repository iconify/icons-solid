import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woztp5_3b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="woztp5_3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:applications-settings"} {...others} />);
}

export default Component;
