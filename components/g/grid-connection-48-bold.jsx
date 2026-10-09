import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecsxwxlqe.css';
import '../../css/t/t0dlmtbvr.css';
import '../../css/b/bmv6c382p.css';
import '../../css/l/lbqk-2fig.css';
import '../../css/b/bqx1e0tys.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ecsxwxlqe"/><path class="t0dlmtbvr"/><path class="bmv6c382p"/><path class="lbqk-2fig"/><path class="bqx1e0tys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-connection-48-bold"} {...others} />);
}

export default Component;
