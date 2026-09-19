import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl7z0xbvn.css';
import '../../css/f/fxr_yobjy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nl7z0xbvn"/><path class="fxr_yobjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:calendar-week"} {...others} />);
}

export default Component;
