import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qae_zubij.css';
import '../../css/s/stlnhm10c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qae_zubij"/><path class="stlnhm10c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fish-ladder-20"} {...others} />);
}

export default Component;
