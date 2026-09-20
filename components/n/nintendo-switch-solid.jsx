import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha9b68b0m.css';
import '../../css/f/fjxvhi0bo.css';
import '../../css/f/ftf34c06p.css';
import '../../css/l/l2ptp5l2h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ha9b68b0m"/><path clip-rule="evenodd" class="fjxvhi0bo"/><path class="ftf34c06p"/><path clip-rule="evenodd" class="l2ptp5l2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:nintendo-switch-solid"} {...others} />);
}

export default Component;
