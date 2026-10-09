import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz1-3kbvd.css';
import '../../css/k/kpheslb2j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yz1-3kbvd"/><path class="kpheslb2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-48"} {...others} />);
}

export default Component;
