import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea24ebbtv.css';
import '../../css/i/il3gm6b7g.css';
import '../../css/c/cvwrb4bdp.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGFfbq8ceP" x1="256.1" x2="256.1" y1="-96" y2="626.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="ea24ebbtv"/><stop offset="1" class="il3gm6b7g"/></linearGradient><path fill="url(#SVGFfbq8ceP)" class="cvwrb4bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:motioneye"} {...others} />);
}

export default Component;
