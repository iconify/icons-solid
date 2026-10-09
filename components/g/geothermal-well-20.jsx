import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bejh_pbmo.css';
import '../../css/s/s5qakmbbz.css';
import '../../css/u/ux699tbwn.css';
import '../../css/v/v_7pz1b8z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bejh_pbmo"/><path class="s5qakmbbz"/><path class="ux699tbwn"/><path class="v_7pz1b8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-well-20"} {...others} />);
}

export default Component;
