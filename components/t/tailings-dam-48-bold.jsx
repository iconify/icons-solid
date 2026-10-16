import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it4grp-4n.css';
import '../../css/h/hk3jr4mxp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="it4grp-4n"/><path class="hk3jr4mxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tailings-dam-48-bold"} {...others} />);
}

export default Component;
