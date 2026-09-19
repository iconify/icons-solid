import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/u/ughwv1b5j.css';
import '../../css/r/r1yww25tm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="ughwv1b5j"/><path class="r1yww25tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:distribute-horizontal-spacing"} {...others} />);
}

export default Component;
