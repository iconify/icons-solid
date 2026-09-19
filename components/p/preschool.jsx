import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l2325kb9f.css';
import '../../css/k/k1ag-cgsk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="l2325kb9f"/><path class="k1ag-cgsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:preschool"} {...others} />);
}

export default Component;
