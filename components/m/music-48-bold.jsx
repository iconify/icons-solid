import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqiswsboe.css';
import '../../css/r/rynce1opb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kqiswsboe"/><path class="rynce1opb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:music-48-bold"} {...others} />);
}

export default Component;
