import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpd0sxoqw.css';
import '../../css/z/z-nr2n3tk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpd0sxoqw"/><path class="z-nr2n3tk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:gear-filled"} {...others} />);
}

export default Component;
