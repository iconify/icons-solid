import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b9orh09dv.css';
import '../../css/a/adqobuhpk.css';
import '../../css/g/g9ki1ac-n.css';
import '../../css/f/fzk7drbpx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b9orh09dv"/><path class="adqobuhpk"/><path class="g9ki1ac-n"/><path class="fzk7drbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yaw-20-bold"} {...others} />);
}

export default Component;
