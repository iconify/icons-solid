import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyyebzbnj.css';
import '../../css/w/wz2svgbib.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tyyebzbnj"/><path class="wz2svgbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-combo-48"} {...others} />);
}

export default Component;
