import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eklehac_u.css';
import '../../css/d/df9l4c7sv.css';
import '../../css/i/i9irzwb5k.css';
import '../../css/n/nu3gfcbun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eklehac_u"/><path class="df9l4c7sv"/><path class="i9irzwb5k"/><path clip-rule="evenodd" class="nu3gfcbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-outline"} {...others} />);
}

export default Component;
