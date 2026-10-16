import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbiesybpo.css';
import '../../css/h/hxd8jsd4c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dbiesybpo"/><path class="hxd8jsd4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-negative-48"} {...others} />);
}

export default Component;
