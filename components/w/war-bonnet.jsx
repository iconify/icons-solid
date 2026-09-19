import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyrm0abvf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lyrm0abvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:war-bonnet"} {...others} />);
}

export default Component;
