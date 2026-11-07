import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z09gg-b_z.css';
import '../../css/y/yncnjebzq.css';
import '../../css/w/woxdewbog.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z09gg-b_z"/><path class="yncnjebzq"/><path clip-rule="evenodd" class="woxdewbog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-2-bold"} {...others} />);
}

export default Component;
