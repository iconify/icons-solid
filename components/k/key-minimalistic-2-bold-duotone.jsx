import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhw3f2lhi.css';
import '../../css/h/halx4mbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uhw3f2lhi"/><path class="halx4mbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:key-minimalistic-2-bold-duotone"} {...others} />);
}

export default Component;
