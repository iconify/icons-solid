import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/m16iq-bli.css';
import '../../css/h/h93505_yx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMFckIcYW"><g class="v3_i3wktz"><path class="m16iq-bli"/><path class="h93505_yx"/></g></mask></defs><path mask="url(#SVGMFckIcYW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baby-car-seat"} {...others} />);
}

export default Component;
