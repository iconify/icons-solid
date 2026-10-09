import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucvn8mbai.css';
import '../../css/k/k220q4beo.css';
import '../../css/j/j2pm5abdo.css';
import '../../css/l/l2mw_ubua.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ucvn8mbai"/><path class="k220q4beo"/><path class="j2pm5abdo"/><path class="l2mw_ubua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biomass-20"} {...others} />);
}

export default Component;
