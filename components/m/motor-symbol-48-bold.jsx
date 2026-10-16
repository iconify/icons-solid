import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf_iwi87h.css';
import '../../css/v/vc8qn24vt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tf_iwi87h"/><path class="vc8qn24vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motor-symbol-48-bold"} {...others} />);
}

export default Component;
