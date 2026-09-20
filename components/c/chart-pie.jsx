import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayw6rtddd.css';
import '../../css/e/e-psi4b0u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ayw6rtddd"/><path class="e-psi4b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:chart-pie"} {...others} />);
}

export default Component;
