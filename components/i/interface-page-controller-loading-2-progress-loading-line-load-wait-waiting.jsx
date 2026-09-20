import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i-4ff-but.css';
import '../../css/z/z3xq6mbmt.css';
import '../../css/l/lndy6cqmx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="i-4ff-but"/><rect class="z3xq6mbmt"/><path class="lndy6cqmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-page-controller-loading-2-progress-loading-line-load-wait-waiting"} {...others} />);
}

export default Component;
