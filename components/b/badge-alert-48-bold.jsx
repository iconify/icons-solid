import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si1030bhs.css';
import '../../css/e/e0fdkfvpb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="si1030bhs"/><path class="e0fdkfvpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-alert-48-bold"} {...others} />);
}

export default Component;
