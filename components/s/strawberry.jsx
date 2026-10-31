import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu7v447dn.css';
import '../../css/z/z_bt_qzld.css';
import '../../css/p/p8rdedbcb.css';
import '../../css/d/d5g4vpbtg.css';
import '../../css/z/zvwl3kbtm.css';
import '../../css/r/rgz5y2nes.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qu7v447dn"/><path class="z_bt_qzld"/><path class="p8rdedbcb"/><path class="d5g4vpbtg"/><path class="zvwl3kbtm"/><path class="rgz5y2nes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:strawberry"} {...others} />);
}

export default Component;
