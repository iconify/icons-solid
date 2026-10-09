import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g21_8vbpp.css';
import '../../css/v/v-zb6dbml.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g21_8vbpp"/><path class="v-zb6dbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-fuel-48-bold"} {...others} />);
}

export default Component;
