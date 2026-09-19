import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk-0nwoxu.css';
import '../../css/k/klrrfacgb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nk-0nwoxu"/><path class="klrrfacgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:dreamweaver"} {...others} />);
}

export default Component;
