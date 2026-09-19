import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwq6y7vmd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kwq6y7vmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:dry-normal-low-heat"} {...others} />);
}

export default Component;
