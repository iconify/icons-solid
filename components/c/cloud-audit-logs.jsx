import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9evpcb4o.css';
import '../../css/q/qsuvseb-y.css';
import '../../css/s/syy27hbbu.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/q/qkc2qdi9h.css';
import '../../css/c/cox6gfr-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9evpcb4o"/><path class="qsuvseb-y"/><path class="syy27hbbu"/><path class="i7sr6ubzr"/><path class="qkc2qdi9h"/><path class="cox6gfr-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-audit-logs"} {...others} />);
}

export default Component;
