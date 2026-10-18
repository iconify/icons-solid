import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4hv076ez.css';
import '../../css/c/cf_myobqe.css';
import '../../css/o/og0kpn30n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a4hv076ez"/><path class="cf_myobqe"/><path class="og0kpn30n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waste-to-energy-48"} {...others} />);
}

export default Component;
