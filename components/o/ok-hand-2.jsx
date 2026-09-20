import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezyxgw9vg.css';
import '../../css/q/qp8bz4-8j.css';
import '../../css/s/snp287xku.css';
import '../../css/m/m5g4t9z3h.css';
import '../../css/l/lvbo_jqym.css';
import '../../css/s/s8x4fmbwu.css';
import '../../css/j/jte-pebwq.css';
import '../../css/h/h7vsvab-w.css';
import '../../css/h/hap247b_z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ezyxgw9vg"/><path class="qp8bz4-8j"/><path class="snp287xku"/><path class="m5g4t9z3h"/><path class="lvbo_jqym"/><path class="s8x4fmbwu"/><path class="jte-pebwq"/><path class="h7vsvab-w"/><path class="hap247b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:ok-hand-2"} {...others} />);
}

export default Component;
