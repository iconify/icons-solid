import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn7efoaca.css';
import '../../css/f/f56ez5bwj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cn7efoaca"/><path class="f56ez5bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zero-emissions-48-bold"} {...others} />);
}

export default Component;
