import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mj39bccmk.css';
import '../../css/y/y8v-tql_s.css';
import '../../css/t/to2zchgfu.css';
import '../../css/v/v3vmfd88i.css';
import '../../css/s/sbvfr8zps.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="mj39bccmk"/><path class="y8v-tql_s"/><circle class="to2zchgfu"/><path class="v3vmfd88i"/><path class="sbvfr8zps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:mounted"} {...others} />);
}

export default Component;
