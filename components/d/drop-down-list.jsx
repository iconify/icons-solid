import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/d/d8561dbcl.css';
import '../../css/v/v2hl7bboe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="d8561dbcl"/><path class="v2hl7bboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:drop-down-list"} {...others} />);
}

export default Component;
