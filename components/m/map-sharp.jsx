import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kretn3bdy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kretn3bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:map-sharp"} {...others} />);
}

export default Component;
