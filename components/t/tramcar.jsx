import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m42jqmb1w.css';
import '../../css/c/cjw_o_14j.css';
import '../../css/y/y-9j9nb8d.css';
import '../../css/f/f2rm6zu5m.css';
import '../../css/u/ufk867j2p.css';
import '../../css/q/q8iil6ngz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m42jqmb1w st0"/><path class="cjw_o_14j st1"/><path class="st2 y-9j9nb8d"/><path class="f2rm6zu5m st3"/><path class="st4 ufk867j2p"/><path class="q8iil6ngz st2"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tramcar"} {...others} />);
}

export default Component;
