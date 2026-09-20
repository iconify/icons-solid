import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p82bg5uit.css';
import '../../css/s/shsnm5blf.css';
import '../../css/y/yiub7sneg.css';
import '../../css/f/fp-yz8bmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p82bg5uit"/><path class="shsnm5blf"/><path class="yiub7sneg"/><path class="fp-yz8bmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:attic"} {...others} />);
}

export default Component;
