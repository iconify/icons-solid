import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_x-8tr3r.css';
import '../../css/s/syc2h_bfp.css';
import '../../css/a/azwfg31kd.css';
import '../../css/h/hrh9qhbrz.css';
import '../../css/i/ii-b8448c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v_x-8tr3r"/><path class="syc2h_bfp"/><path class="azwfg31kd"/><path class="hrh9qhbrz"/><path class="ii-b8448c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bulldozer-20"} {...others} />);
}

export default Component;
