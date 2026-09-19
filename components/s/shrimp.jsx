import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flz1i8pyj.css';
import '../../css/e/evvf81f4r.css';
import '../../css/m/mwwapo85f.css';
import '../../css/r/rd_no8yio.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="flz1i8pyj"/><path class="evvf81f4r"/><path class="mwwapo85f"/><circle class="rd_no8yio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shrimp"} {...others} />);
}

export default Component;
