import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfddwd_7g.css';
import '../../css/j/j0j3yqboy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yfddwd_7g"/><path class="j0j3yqboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:phone-settings"} {...others} />);
}

export default Component;
