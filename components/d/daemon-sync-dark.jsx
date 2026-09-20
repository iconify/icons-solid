import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/odvo0kyvf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="odvo0kyvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:daemon-sync-dark"} {...others} />);
}

export default Component;
