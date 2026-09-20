import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3k-9lb1z.css';
import '../../css/u/u79pk-b6p.css';
import '../../css/e/exgpfybkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3k-9lb1z"/><path class="u79pk-b6p"/><path class="exgpfybkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:video-file-download-bold"} {...others} />);
}

export default Component;
