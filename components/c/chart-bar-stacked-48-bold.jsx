import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihmii9b0s.css';
import '../../css/t/t-vpait8s.css';
import '../../css/b/bbomh7bop.css';
import '../../css/b/bho8l9bjj.css';
import '../../css/w/wpjkcbchw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ihmii9b0s"/><path class="t-vpait8s"/><path class="bbomh7bop"/><path class="bho8l9bjj"/><path class="wpjkcbchw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-stacked-48-bold"} {...others} />);
}

export default Component;
