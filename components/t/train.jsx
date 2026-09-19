import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymd4orbxh.css';
import '../../css/m/m7rus1bei.css';
import '../../css/v/vaiokxbaf.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse transform="rotate(-45 256.001 304)" class="ymd4orbxh"/><path class="m7rus1bei"/><path class="vaiokxbaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:train"} {...others} />);
}

export default Component;
