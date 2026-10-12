import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clchgpbjo.css';
import '../../css/q/qvo2fwbpx.css';
import '../../css/r/rmh8yimxi.css';
import '../../css/w/wq8vaxb7s.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="clchgpbjo"/><path class="qvo2fwbpx"/><path class="rmh8yimxi"/><path class="wq8vaxb7s"/><path class="y9mg2tbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-meter-check-48-bold"} {...others} />);
}

export default Component;
