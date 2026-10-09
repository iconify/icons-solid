import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zisu_cc5g.css';
import '../../css/i/i8f0698ec.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zisu_cc5g"/><path class="i8f0698ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-rain-48-bold"} {...others} />);
}

export default Component;
