import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbexcdcsc.css';
import '../../css/b/btxln4pbg.css';
import '../../css/p/p8qjm6bhy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xbexcdcsc"/><path class="btxln4pbg"/><path class="p8qjm6bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-bulb"} {...others} />);
}

export default Component;
