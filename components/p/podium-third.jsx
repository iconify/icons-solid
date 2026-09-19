import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw4uzcfbn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mw4uzcfbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:podium-third"} {...others} />);
}

export default Component;
