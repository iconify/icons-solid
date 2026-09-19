import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wg-0_nb4x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wg-0_nb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:arrow-thick-from-bottom"} {...others} />);
}

export default Component;
