import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibwid0w7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ibwid0w7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-thick-right-bottom-corner-3-bold"} {...others} />);
}

export default Component;
