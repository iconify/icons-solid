import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvuyyuo8q.css';
import '../../css/f/f9hkrrbct.css';
import '../../css/a/act527ope.css';
import '../../css/t/tisyxw3xk.css';
import '../../css/q/qqmm7obvp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dvuyyuo8q"/><path class="f9hkrrbct"/><path class="act527ope"/><path class="tisyxw3xk"/><path class="qqmm7obvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:chartjs-wordmark"} {...others} />);
}

export default Component;
