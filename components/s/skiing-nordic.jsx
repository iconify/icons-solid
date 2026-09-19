import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/r/r0nv15b5g.css';
import '../../css/k/k-gfreizg.css';
import '../../css/f/f0elirbsr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="r0nv15b5g"/><path class="k-gfreizg"/><path class="f0elirbsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:skiing-nordic"} {...others} />);
}

export default Component;
