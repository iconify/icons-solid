import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/q/q-d9kh0tc.css';
import '../../css/m/m0qa3fayh.css';
import '../../css/k/kiknbdcxq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="q-d9kh0tc"/><path class="m0qa3fayh"/><path class="kiknbdcxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermostat-20"} {...others} />);
}

export default Component;
