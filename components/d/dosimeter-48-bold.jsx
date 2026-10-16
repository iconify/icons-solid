import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8d9-acuv.css';
import '../../css/t/t3nsxqbji.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k8d9-acuv"/><path class="t3nsxqbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dosimeter-48-bold"} {...others} />);
}

export default Component;
