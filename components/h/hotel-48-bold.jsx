import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pla65zbzp.css';
import '../../css/t/tmookwb_d.css';
import '../../css/s/sbar25bid.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pla65zbzp"/><path class="tmookwb_d"/><path class="sbar25bid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hotel-48-bold"} {...others} />);
}

export default Component;
