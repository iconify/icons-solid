import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydzth1mww.css';
import '../../css/v/vf8m8ubqt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ydzth1mww"/><path class="vf8m8ubqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wardrobe-20-bold"} {...others} />);
}

export default Component;
