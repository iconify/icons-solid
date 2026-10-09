import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/m/m50p6idie.css';
import '../../css/k/keaw_tt0r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="m50p6idie"/><path class="keaw_tt0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:basketball-20"} {...others} />);
}

export default Component;
