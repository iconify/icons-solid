import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7zz7vboy.css';
import '../../css/i/ipogvcwzq.css';
import '../../css/n/nr35mg1ux.css';
import '../../css/i/i9yxaoc2b.css';
import '../../css/b/b1qrr3bxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="y7zz7vboy"/><path class="ipogvcwzq"/><path class="nr35mg1ux"/><path class="i9yxaoc2b"/><path class="b1qrr3bxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-play-bold-duotone"} {...others} />);
}

export default Component;
