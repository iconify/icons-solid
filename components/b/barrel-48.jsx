import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh0wmoblc.css';
import '../../css/o/oxbk-rb9l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qh0wmoblc"/><path class="oxbk-rb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:barrel-48"} {...others} />);
}

export default Component;
