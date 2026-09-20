import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uojy9gomk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uojy9gomk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:invoice-text-send-outline"} {...others} />);
}

export default Component;
