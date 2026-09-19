import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfyn0ccck.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="mfyn0ccck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:blender-phone"} {...others} />);
}

export default Component;
