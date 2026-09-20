import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/feh3568qk.css';
import '../../css/s/se175u0vt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="feh3568qk"/><path clip-rule="evenodd" class="se175u0vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:aas-shell-search-filled"} {...others} />);
}

export default Component;
