import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1iximrex.css';
import '../../css/f/f7x3lpbdr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q1iximrex"/><path class="f7x3lpbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fries-48"} {...others} />);
}

export default Component;
