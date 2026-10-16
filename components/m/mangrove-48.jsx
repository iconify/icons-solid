import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8l5xaczx.css';
import '../../css/c/coymtdbzr.css';
import '../../css/d/dq3q99bce.css';
import '../../css/s/s7uj0wb4j.css';
import '../../css/t/ti8crmbmx.css';
import '../../css/a/a5nh_fblt.css';
import '../../css/e/edocpf2xg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x8l5xaczx"/><path class="coymtdbzr"/><path class="dq3q99bce"/><path class="s7uj0wb4j"/><path class="ti8crmbmx"/><path class="a5nh_fblt"/><path class="edocpf2xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mangrove-48"} {...others} />);
}

export default Component;
