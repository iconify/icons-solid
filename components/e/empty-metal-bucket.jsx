import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppq6b8bgm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ppq6b8bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:empty-metal-bucket"} {...others} />);
}

export default Component;
