import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plo6q25eo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="plo6q25eo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:adjustments-horizontal-outline"} {...others} />);
}

export default Component;
