import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/d/djxofjbue.css';
import '../../css/e/euzjwdbwe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="djxofjbue"/><path class="euzjwdbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:camera-1"} {...others} />);
}

export default Component;
