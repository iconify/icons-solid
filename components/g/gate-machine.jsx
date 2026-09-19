import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/s/sbvkimbug.css';
import '../../css/y/y45tttcaa.css';
import '../../css/c/c750qhjgq.css';
import '../../css/y/y0yq2e4to.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="sbvkimbug"/><path class="y45tttcaa"/><path class="c750qhjgq"/><path class="y0yq2e4to"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:gate-machine"} {...others} />);
}

export default Component;
