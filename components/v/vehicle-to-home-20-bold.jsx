import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sflgm1xrv.css';
import '../../css/a/awkb24b_h.css';
import '../../css/y/y6syetncv.css';
import '../../css/c/c3totsbmy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sflgm1xrv"/><path class="awkb24b_h"/><path class="y6syetncv"/><path class="c3totsbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vehicle-to-home-20-bold"} {...others} />);
}

export default Component;
