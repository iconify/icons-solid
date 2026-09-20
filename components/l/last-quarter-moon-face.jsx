import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usl55m1mq.css';
import '../../css/m/m24zplbff.css';
import '../../css/g/g7_albbtb.css';
import '../../css/d/dipzmp6lv.css';
import '../../css/b/bsk8xpu5g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="usl55m1mq"/><path class="m24zplbff"/><circle class="g7_albbtb"/><path class="dipzmp6lv"/><path class="bsk8xpu5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:last-quarter-moon-face"} {...others} />);
}

export default Component;
