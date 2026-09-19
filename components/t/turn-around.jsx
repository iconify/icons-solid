import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i_r28w9ux.css';
import '../../css/h/h2lxde8ed.css';
import '../../css/a/abbey2buw.css';
import '../../css/y/ykcsqobzd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="i_r28w9ux"/><path class="h2lxde8ed"/><path class="abbey2buw"/><path class="ykcsqobzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:turn-around"} {...others} />);
}

export default Component;
