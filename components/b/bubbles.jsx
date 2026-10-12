import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-atjk-xg.css';
import '../../css/d/dnaly4_8d.css';
import '../../css/g/g-yymtbay.css';
import '../../css/b/bo5zktbpc.css';
import '../../css/s/s1msn67ty.css';
import '../../css/u/u-q-jtbiq.css';
import '../../css/q/qd5uy8b8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="c-atjk-xg"/><circle class="dnaly4_8d"/><circle class="g-yymtbay"/><circle class="bo5zktbpc"/><circle class="s1msn67ty"/><circle class="u-q-jtbiq"/><path class="qd5uy8b8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bubbles"} {...others} />);
}

export default Component;
