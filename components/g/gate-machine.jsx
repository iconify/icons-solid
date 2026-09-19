import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/b/b_wap9baf.css';
import '../../css/y/y0yq2e4to.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="b_wap9baf"/><path class="y0yq2e4to"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gate-machine"} {...others} />);
}

export default Component;
