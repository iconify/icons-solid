import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpiexkbzr.css';
import '../../css/o/o2cwdor8r.css';
import '../../css/s/s-wrx8p7w.css';
import '../../css/m/m2c0gebcs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vpiexkbzr"/><path class="o2cwdor8r"/><path class="s-wrx8p7w"/><circle class="m2c0gebcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:fire-extinguisher"} {...others} />);
}

export default Component;
