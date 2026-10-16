import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn-0rhblv.css';
import '../../css/e/e3n6u6z4p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sn-0rhblv"/><path class="e3n6u6z4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-lantern-48"} {...others} />);
}

export default Component;
