import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ip4n_nb-a.css';
import '../../css/n/nwb7bcc2i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ip4n_nb-a"/><path class="nwb7bcc2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-label-48"} {...others} />);
}

export default Component;
