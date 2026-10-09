import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w31fx27ee.css';
import '../../css/i/iorf4rbnv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w31fx27ee"/><path class="iorf4rbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pellet-boiler-48-bold"} {...others} />);
}

export default Component;
