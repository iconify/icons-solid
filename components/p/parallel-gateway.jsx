import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z2qxq_b6e.css';
import '../../css/n/n54feq_7f.css';
import '../../css/g/gg07ndbtc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="z2qxq_b6e"/><path class="n54feq_7f"/><path class="gg07ndbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:parallel-gateway"} {...others} />);
}

export default Component;
