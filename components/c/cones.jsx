import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xwh7h2bfx.css';
import '../../css/g/g8e35kbyv.css';
import '../../css/y/yv76jrb0g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="xwh7h2bfx"/><path class="g8e35kbyv"/><path class="yv76jrb0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cones"} {...others} />);
}

export default Component;
