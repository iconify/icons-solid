import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogq1sfe1k.css';
import '../../css/y/ylzgf4buq.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ogq1sfe1k"/><circle class="ylzgf4buq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:location-on"} {...others} />);
}

export default Component;
