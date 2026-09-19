import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylugypbul.css';
import '../../css/h/h35_vrvxl.css';
import '../../css/n/nevl0ie7p.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ylugypbul"/><path class="h35_vrvxl"/><path class="nevl0ie7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:phone-route-alt"} {...others} />);
}

export default Component;
