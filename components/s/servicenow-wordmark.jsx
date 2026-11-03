import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3au-5bor.css';
import '../../css/a/avg_k22jv.css';
import '../../css/i/ic5amcb4z.css';
import '../../css/d/d2wq1dhwn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l3au-5bor"/><path class="avg_k22jv"/><path class="ic5amcb4z"/><path class="d2wq1dhwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:servicenow-wordmark"} {...others} />);
}

export default Component;
