import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wucmcgbnn.css';
import '../../css/v/vvv44tbru.css';
import '../../css/y/y7mmorbkl.css';
import '../../css/v/vinq-2bgi.css';
import '../../css/n/n558t4bmc.css';
import '../../css/n/nwgptrbsn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wucmcgbnn"/><path class="vvv44tbru"/><path class="y7mmorbkl"/><path clip-rule="evenodd" class="vinq-2bgi"/><path class="n558t4bmc"/><path class="nwgptrbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cocktail-pop"} {...others} />);
}

export default Component;
