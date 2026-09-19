import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/upuhkwbrx.css';
import '../../css/v/vh156zb_f.css';
import '../../css/a/au67ybcgw.css';
import '../../css/v/v-y43hbiv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="upuhkwbrx"/><path class="vh156zb_f"/><path class="au67ybcgw"/><path class="v-y43hbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:user-to-user-transmission"} {...others} />);
}

export default Component;
