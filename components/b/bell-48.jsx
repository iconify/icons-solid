import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hosli1blv.css';
import '../../css/f/frcqirb2p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hosli1blv"/><path class="frcqirb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-48"} {...others} />);
}

export default Component;
