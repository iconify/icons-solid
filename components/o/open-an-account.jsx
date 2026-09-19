import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s1fladbkj.css';
import '../../css/y/y_odl42ju.css';
import '../../css/e/eovdg6d5i.css';
import '../../css/h/h13kfet8r.css';
import '../../css/x/x0lz4dbgz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="s1fladbkj"/><path class="y_odl42ju"/><path class="eovdg6d5i"/><circle class="h13kfet8r"/><path class="x0lz4dbgz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:open-an-account"} {...others} />);
}

export default Component;
