import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b7ll2egzf.css';
import '../../css/v/v2ruv0bjc.css';
import '../../css/m/mbh0r8bba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b7ll2egzf"/><path class="v2ruv0bjc"/><path clip-rule="evenodd" class="mbh0r8bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-minimalistic-bold"} {...others} />);
}

export default Component;
