import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/o/owvgdy79c.css';
import '../../css/u/urksymbrn.css';
import '../../css/j/jzy_lab4f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="owvgdy79c"/><path class="urksymbrn"/><path class="jzy_lab4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tailoring"} {...others} />);
}

export default Component;
