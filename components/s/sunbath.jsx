import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/u_zop0cpq.css';
import '../../css/u/u5sw-_ufh.css';
import '../../css/t/tisypqxzp.css';
import '../../css/f/fo_p2p1mo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="u_zop0cpq"/><path class="u5sw-_ufh"/><path class="tisypqxzp"/><path class="fo_p2p1mo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sunbath"} {...others} />);
}

export default Component;
