import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly6i-fbqm.css';
import '../../css/n/ndjzvdb6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ly6i-fbqm"/><path class="ndjzvdb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:snowboard-48"} {...others} />);
}

export default Component;
