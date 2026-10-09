import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl-eb8nlu.css';
import '../../css/f/fllxkcc6v.css';
import '../../css/p/pe3l-_bzx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dl-eb8nlu"/><path class="fllxkcc6v"/><path class="pe3l-_bzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hospital-48-bold"} {...others} />);
}

export default Component;
