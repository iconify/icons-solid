import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqq9dubwh.css';
import '../../css/z/zb7trtbpd.css';
import '../../css/r/rwwit473d.css';
import '../../css/n/n9_1hko9k.css';
import '../../css/s/s143d0bhg.css';
import '../../css/e/ethwgsbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="yqq9dubwh"/><circle class="zb7trtbpd"/><rect class="rwwit473d"/><path class="n9_1hko9k"/><path class="s143d0bhg"/><circle class="ethwgsbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:transform"} {...others} />);
}

export default Component;
