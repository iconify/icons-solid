import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/t/taetgzrim.css';
import '../../css/a/augjm-bnx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="taetgzrim"/><path class="augjm-bnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:distribute-vertical-spacing"} {...others} />);
}

export default Component;
