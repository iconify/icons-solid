import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkjmfib4i.css';
import '../../css/s/s2r542g-g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jkjmfib4i"/><path class="s2r542g-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-fading-play-filled"} {...others} />);
}

export default Component;
