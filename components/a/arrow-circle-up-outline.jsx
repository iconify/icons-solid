import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8op9voft.css';
import '../../css/w/wckr9kb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r8op9voft"/><path class="wckr9kb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:arrow-circle-up-outline"} {...others} />);
}

export default Component;
