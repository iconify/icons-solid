import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yunbzdkgv.css';
import '../../css/e/enprt-cqi.css';
import '../../css/l/lf89rob8e.css';
import '../../css/i/i6yqdgb5h.css';
import '../../css/w/w78h58b6b.css';
import '../../css/d/d6rury8on.css';
import '../../css/q/qubai3bkt.css';
import '../../css/q/qo4wesb1v.css';
import '../../css/e/edzgi7bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow yunbzdkgv"/><path class="enprt-cqi wm-k"/><path class="lf89rob8e wm-k"/><path class="i6yqdgb5h wm-k"/><path class="w78h58b6b wm-k"/><path class="d6rury8on wm-k"/><path class="qubai3bkt wm-shine"/><path class="qo4wesb1v wm-a"/><path class="edzgi7bmm wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:log-out"} {...others} />);
}

export default Component;
