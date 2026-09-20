import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zimyt6t2s.css';
import '../../css/a/arp8k0bbf.css';
import '../../css/d/dfx7x6xcm.css';
import '../../css/k/kdet8cbvr.css';
import '../../css/g/g4x-ne9iu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zimyt6t2s"/><path clip-rule="evenodd" class="arp8k0bbf"/><path clip-rule="evenodd" class="dfx7x6xcm"/><path class="kdet8cbvr"/><path class="g4x-ne9iu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:give-gift-flat"} {...others} />);
}

export default Component;
