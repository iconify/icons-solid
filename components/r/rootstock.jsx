import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc72tnbzk.css';
import '../../css/i/i3fanzlul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fc72tnbzk"/><path class="i3fanzlul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rootstock"} {...others} />);
}

export default Component;
