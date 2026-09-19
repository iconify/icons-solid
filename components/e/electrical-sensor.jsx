import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuk1d-bfg.css';
import '../../css/o/oc597y_vl.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/r/r3281h9zh.css';
import '../../css/l/lu0-a7blo.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="iuk1d-bfg"/><path class="oc597y_vl"/><g class="wtfmx7b3v"><path class="r3281h9zh"/><circle class="lu0-a7blo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:electrical-sensor"} {...others} />);
}

export default Component;
