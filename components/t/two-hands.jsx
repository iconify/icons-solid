import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pkmhe-bhn.css';
import '../../css/o/okpsqnrbl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="pkmhe-bhn"/><path class="okpsqnrbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:two-hands"} {...others} />);
}

export default Component;
