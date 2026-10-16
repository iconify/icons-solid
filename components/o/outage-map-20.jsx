import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms_f6iiek.css';
import '../../css/p/pjqmup4lz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ms_f6iiek"/><path class="pjqmup4lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:outage-map-20"} {...others} />);
}

export default Component;
