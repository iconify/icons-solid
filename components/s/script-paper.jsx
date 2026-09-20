import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/n/nrb3yrbib.css';
import '../../css/d/dhvxuxb5a.css';
import '../../css/v/vbd_kdzhn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="nrb3yrbib"/><path class="dhvxuxb5a"/><path class="vbd_kdzhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:script-paper"} {...others} />);
}

export default Component;
