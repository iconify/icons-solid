import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nivpnqg4j.css';
import '../../css/l/layzn__cg.css';
import '../../css/k/keyr8hhna.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nivpnqg4j"/><path class="layzn__cg"/><path class="keyr8hhna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-3x3-20-bold"} {...others} />);
}

export default Component;
