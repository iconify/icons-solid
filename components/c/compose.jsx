import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wezx3bbsv.css';
import '../../css/j/j14wpibjz.css';
import '../../css/w/wv5glxoac.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wezx3bbsv"/><path class="j14wpibjz"/><path class="wv5glxoac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:compose"} {...others} />);
}

export default Component;
