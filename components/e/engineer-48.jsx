import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a79qrsspc.css';
import '../../css/q/q26w3actz.css';
import '../../css/h/hn417qbqc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a79qrsspc"/><path class="q26w3actz"/><path class="hn417qbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:engineer-48"} {...others} />);
}

export default Component;
