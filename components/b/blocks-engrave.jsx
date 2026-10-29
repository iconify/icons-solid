import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r8f1pibxd.css';
import '../../css/y/y73rrwria.css';
import '../../css/c/cfp4t-bfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r8f1pibxd"/><path class="wm-shadow y73rrwria"/><path class="cfp4t-bfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:blocks-engrave"} {...others} />);
}

export default Component;
