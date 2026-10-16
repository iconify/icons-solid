import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of_ts022v.css';
import '../../css/c/cj1nlzlda.css';
import '../../css/t/tjxajkbik.css';
import '../../css/j/j-iq2zbqg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="of_ts022v"/><path class="cj1nlzlda"/><path class="tjxajkbik"/><path class="j-iq2zbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-cycle-48"} {...others} />);
}

export default Component;
