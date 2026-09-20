import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p94z0c4xt.css';
import '../../css/x/xomkjebmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p94z0c4xt"/><path class="xomkjebmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:recycle-two-tone"} {...others} />);
}

export default Component;
