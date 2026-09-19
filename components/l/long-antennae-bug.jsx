import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdxjo73ia.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wdxjo73ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:long-antennae-bug"} {...others} />);
}

export default Component;
