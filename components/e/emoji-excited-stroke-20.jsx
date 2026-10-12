import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5dk3pbjk.css';
import '../../css/j/jpdmwmb0j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u5dk3pbjk"/><path class="jpdmwmb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:emoji-excited-stroke-20"} {...others} />);
}

export default Component;
