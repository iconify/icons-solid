import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwpo9x45k.css';
import '../../css/x/xyg-yxntl.css';
import '../../css/y/y02rykbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fwpo9x45k"/><path class="xyg-yxntl"/><path clip-rule="evenodd" class="y02rykbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-adsense-logo-solid"} {...others} />);
}

export default Component;
