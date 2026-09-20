import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqixrrxdw.css';
import '../../css/f/fqelom7_s.css';
import '../../css/m/mfgl81bid.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rqixrrxdw"/><path class="fqelom7_s"/><path clip-rule="evenodd" class="mfgl81bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:lost-and-found-flat"} {...others} />);
}

export default Component;
