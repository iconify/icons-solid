import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-862obek.css';
import '../../css/x/x46_-vqrk.css';
import '../../css/t/tgpjl8b9x.css';
import '../../css/t/thwemd3eh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y-862obek"/><rect class="x46_-vqrk"/><path class="tgpjl8b9x"/><circle class="thwemd3eh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:master"} {...others} />);
}

export default Component;
