import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0bz1cnyy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n0bz1cnyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:pitchfork"} {...others} />);
}

export default Component;
