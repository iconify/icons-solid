import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_vs-hd3z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_vs-hd3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:black-bar"} {...others} />);
}

export default Component;
