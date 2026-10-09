import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oawkc0bme.css';
import '../../css/y/ypair_oeb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oawkc0bme"/><path class="ypair_oeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-left-20"} {...others} />);
}

export default Component;
