import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al_ly38km.css';
import '../../css/u/uav-pacbt.css';
import '../../css/a/ag99qbbai.css';
import '../../css/l/l7namiv5j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="al_ly38km"/><path class="uav-pacbt"/><path class="ag99qbbai"/><path class="l7namiv5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-tracker-20-bold"} {...others} />);
}

export default Component;
