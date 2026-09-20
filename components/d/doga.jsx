import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy3vbebii.css';
import '../../css/p/pshtltbvx.css';
import '../../css/y/yax9-yihq.css';
import '../../css/u/u4n-q8ifu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="iy3vbebii"/><path class="pshtltbvx"/><path clip-rule="evenodd" class="yax9-yihq"/><path class="u4n-q8ifu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:doga"} {...others} />);
}

export default Component;
