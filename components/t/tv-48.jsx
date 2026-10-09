import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu0uvqb2l.css';
import '../../css/k/kafchl2bg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fu0uvqb2l"/><path class="kafchl2bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tv-48"} {...others} />);
}

export default Component;
