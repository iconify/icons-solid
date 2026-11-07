import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x35xwlb8d.css';
import '../../css/z/zs6jv9bdw.css';
import '../../css/x/xz-3bfbvl.css';
import '../../css/l/l07j66hls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x35xwlb8d"/><path clip-rule="evenodd" class="zs6jv9bdw"/><path clip-rule="evenodd" class="xz-3bfbvl"/><path clip-rule="evenodd" class="l07j66hls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-round-sound-bold"} {...others} />);
}

export default Component;
