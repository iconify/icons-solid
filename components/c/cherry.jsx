import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/q/qeegippin.css';
import '../../css/o/ohl-5yb2w.css';
import '../../css/m/mcsbvv71s.css';
import '../../css/k/k410_mbxq.css';
import '../../css/n/ntw0oybgo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><circle class="qeegippin"/><circle class="ohl-5yb2w"/><path class="mcsbvv71s"/><path class="k410_mbxq"/><path class="ntw0oybgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cherry"} {...others} />);
}

export default Component;
