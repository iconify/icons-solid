import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxg6ovbpq.css';
import '../../css/s/s4x--jb2i.css';
import '../../css/t/tvcydpbig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxg6ovbpq"/><path class="s4x--jb2i"/><path clip-rule="evenodd" class="tvcydpbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:emoji-funny-circle-outline"} {...others} />);
}

export default Component;
