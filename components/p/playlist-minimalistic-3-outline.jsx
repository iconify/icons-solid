import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm3heybwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nm3heybwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-3-outline"} {...others} />);
}

export default Component;
