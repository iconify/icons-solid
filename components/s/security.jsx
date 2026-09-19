import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hutp1dbom.css';
import '../../css/p/ph2fqzbun.css';
import '../../css/c/cyzl07bjn.css';
import '../../css/e/eyjrslxga.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="hutp1dbom"/><path class="ph2fqzbun"/><path class="cyzl07bjn"/><path class="eyjrslxga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:security"} {...others} />);
}

export default Component;
