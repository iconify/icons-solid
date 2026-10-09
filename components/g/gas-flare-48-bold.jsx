import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgcs14bkt.css';
import '../../css/o/o2vuw7npi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fgcs14bkt"/><path class="o2vuw7npi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-flare-48-bold"} {...others} />);
}

export default Component;
