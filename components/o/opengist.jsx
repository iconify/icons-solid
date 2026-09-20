import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th81w-wav.css';
import '../../css/w/wvtn6fmsa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="th81w-wav"/><path class="wvtn6fmsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opengist"} {...others} />);
}

export default Component;
