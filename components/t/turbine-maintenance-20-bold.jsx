import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je7r7lbpm.css';
import '../../css/j/jy5mj2b4j.css';
import '../../css/v/veivehbuo.css';
import '../../css/u/ug19bk4co.css';
import '../../css/p/p70a5nd2b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="je7r7lbpm"/><path class="jy5mj2b4j"/><path class="veivehbuo"/><path class="ug19bk4co"/><path class="p70a5nd2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turbine-maintenance-20-bold"} {...others} />);
}

export default Component;
