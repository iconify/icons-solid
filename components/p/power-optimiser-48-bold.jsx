import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxl5_ibwd.css';
import '../../css/w/wx675gush.css';
import '../../css/r/r3c6dl47n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sxl5_ibwd"/><path class="wx675gush"/><path class="r3c6dl47n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-optimiser-48-bold"} {...others} />);
}

export default Component;
