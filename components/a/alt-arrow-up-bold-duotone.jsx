import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anlkm7xov.css';
import '../../css/f/fbtcj0tzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="anlkm7xov"/><path class="fbtcj0tzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
