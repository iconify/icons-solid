import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0a04rwms.css';
import '../../css/v/vlwih1bec.css';
import '../../css/l/lwsxc47kb.css';
import '../../css/k/kkhl62fff.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z0a04rwms"/><path class="vlwih1bec"/><path class="lwsxc47kb"/><path class="kkhl62fff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-input-outline"} {...others} />);
}

export default Component;
