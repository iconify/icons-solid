import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndt99pbau.css';
import '../../css/x/x908mum4i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ndt99pbau"/><path class="x908mum4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:current-transformer-48-bold"} {...others} />);
}

export default Component;
