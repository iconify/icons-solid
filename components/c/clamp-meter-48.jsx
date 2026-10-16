import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muwzxbc8x.css';
import '../../css/o/okfg1bcol.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="muwzxbc8x"/><path class="okfg1bcol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clamp-meter-48"} {...others} />);
}

export default Component;
