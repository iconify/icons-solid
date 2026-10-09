import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aawa8wi0p.css';
import '../../css/p/pv-ojy8ch.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aawa8wi0p"/><path class="pv-ojy8ch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:signature-48"} {...others} />);
}

export default Component;
