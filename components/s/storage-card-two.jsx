import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/l3kdmty5i.css';
import '../../css/d/d8omfabsq.css';
import '../../css/t/tq9o39b5i.css';
import '../../css/u/uictozznf.css';
import '../../css/q/q3f6kmbgw.css';
import '../../css/c/c2e_75s_v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="l3kdmty5i"/><path class="d8omfabsq"/><rect class="tq9o39b5i"/><path class="uictozznf"/><path class="q3f6kmbgw"/><path class="c2e_75s_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:storage-card-two"} {...others} />);
}

export default Component;
