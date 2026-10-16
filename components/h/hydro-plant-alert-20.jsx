import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dix-bwb7j.css';
import '../../css/e/enqyk-b4p.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dix-bwb7j"/><path class="enqyk-b4p"/><path class="nq5_p_bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-plant-alert-20"} {...others} />);
}

export default Component;
