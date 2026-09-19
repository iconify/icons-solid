import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p3ch1bbso.css';
import '../../css/c/cys3heb_c.css';
import '../../css/g/gztsvnpfg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="p3ch1bbso"/><path class="cys3heb_c"/><rect class="gztsvnpfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bow"} {...others} />);
}

export default Component;
