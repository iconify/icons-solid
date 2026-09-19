import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yg7wgbbdt.css';
import '../../css/e/efsxz5dnj.css';
import '../../css/r/rckjn3l5t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yg7wgbbdt"/><path class="efsxz5dnj"/><path class="rckjn3l5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-copy"} {...others} />);
}

export default Component;
