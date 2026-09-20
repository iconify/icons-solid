import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/zpix_vfjr.css';
import '../../css/i/ide3bkb9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="zpix_vfjr"/><path class="ide3bkb9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:location-minus"} {...others} />);
}

export default Component;
