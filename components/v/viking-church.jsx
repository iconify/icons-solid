import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xso4m5s-j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xso4m5s-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:viking-church"} {...others} />);
}

export default Component;
