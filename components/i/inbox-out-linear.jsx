import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-srkbcuc.css';
import '../../css/z/z0iqb0bhw.css';
import '../../css/d/dmfni0bso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f-srkbcuc"/><path class="z0iqb0bhw"/><path class="dmfni0bso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-out-linear"} {...others} />);
}

export default Component;
