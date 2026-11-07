import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3ksbpbqc.css';
import '../../css/v/vg7-w1t_u.css';
import '../../css/w/wsqg-_8tu.css';
import '../../css/l/lzc15j6kx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3ksbpbqc"/><path class="vg7-w1t_u"/><path clip-rule="evenodd" class="wsqg-_8tu"/><path class="lzc15j6kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-play-bold"} {...others} />);
}

export default Component;
