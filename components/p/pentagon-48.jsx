import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpbyx1ete.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qpbyx1ete"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pentagon-48"} {...others} />);
}

export default Component;
