import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng_19u0xj.css';
import '../../css/e/ee19msoje.css';
import '../../css/a/a10r67bkt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ng_19u0xj"/><path class="ee19msoje"/><path class="a10r67bkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tile-48"} {...others} />);
}

export default Component;
