import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4-r16bpz.css';
import '../../css/c/c0abhhbxc.css';
import '../../css/b/bu3d-6cof.css';
import '../../css/x/xnmzdybto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u4-r16bpz"/><path class="c0abhhbxc"/><path class="bu3d-6cof"/><path clip-rule="evenodd" class="xnmzdybto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallpaper-bold"} {...others} />);
}

export default Component;
