import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukrge3umx.css';
import '../../css/y/ybpm01_ag.css';
import '../../css/z/zo-06kn-a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ukrge3umx"/><path class="ybpm01_ag"/><path class="zo-06kn-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-lock-20"} {...others} />);
}

export default Component;
