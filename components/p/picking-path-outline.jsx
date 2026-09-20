import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvbbt4bak.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wvbbt4bak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:picking-path-outline"} {...others} />);
}

export default Component;
