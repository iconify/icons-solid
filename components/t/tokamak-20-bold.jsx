import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_hltyb1h.css';
import '../../css/f/fvgea5bgo.css';
import '../../css/v/vmdmbbhtx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s_hltyb1h"/><path class="fvgea5bgo"/><path class="vmdmbbhtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tokamak-20-bold"} {...others} />);
}

export default Component;
