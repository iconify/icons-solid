import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oypv3gvwf.css';
import '../../css/i/iv7ikabdy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oypv3gvwf"/><path class="iv7ikabdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:server-20-bold"} {...others} />);
}

export default Component;
