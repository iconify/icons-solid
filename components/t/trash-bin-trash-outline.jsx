import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnf34i5ny.css';
import '../../css/u/uaeceybfr.css';
import '../../css/i/ixv5lcckr.css';
import '../../css/n/nyr1js5on.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vnf34i5ny"/><path class="uaeceybfr"/><path class="ixv5lcckr"/><path class="nyr1js5on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-trash-outline"} {...others} />);
}

export default Component;
