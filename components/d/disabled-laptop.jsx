import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/o/okum_ubtb.css';
import '../../css/r/rwqfzub0d.css';
import '../../css/c/cg5yr93ex.css';
import '../../css/a/arejfylph.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="okum_ubtb"/><path class="rwqfzub0d"/><circle class="cg5yr93ex"/><path class="arejfylph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:disabled-laptop"} {...others} />);
}

export default Component;
