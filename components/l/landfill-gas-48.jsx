import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn313-bdo.css';
import '../../css/c/cw3ksvblq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fn313-bdo"/><path class="cw3ksvblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:landfill-gas-48"} {...others} />);
}

export default Component;
