import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/a/a459j710d.css';
import '../../css/t/tblv8fb2h.css';
import '../../css/a/a58oazbjd.css';
import '../../css/r/riz8lqbnz.css';
import '../../css/r/rhk20g9nd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="a459j710d"/><path class="tblv8fb2h"/><circle class="a58oazbjd"/><circle class="riz8lqbnz"/><path class="rhk20g9nd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gift-bag"} {...others} />);
}

export default Component;
