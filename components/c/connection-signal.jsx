import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jvrpqcbxs.css';
import '../../css/m/m025-fvbm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jvrpqcbxs"/><path class="m025-fvbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:connection-signal"} {...others} />);
}

export default Component;
