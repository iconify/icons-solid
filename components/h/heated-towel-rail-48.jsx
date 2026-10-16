import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm-t92b-g.css';
import '../../css/s/s-ndftb7o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tm-t92b-g"/><path class="s-ndftb7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heated-towel-rail-48"} {...others} />);
}

export default Component;
