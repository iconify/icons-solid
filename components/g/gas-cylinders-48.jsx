import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c65-ehvfy.css';
import '../../css/x/xfh1s7buy.css';
import '../../css/d/dng6bccas.css';
import '../../css/f/f_gjw-adj.css';
import '../../css/m/mo425c3ds.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c65-ehvfy"/><path class="xfh1s7buy"/><path class="dng6bccas"/><path class="f_gjw-adj"/><path class="mo425c3ds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-cylinders-48"} {...others} />);
}

export default Component;
