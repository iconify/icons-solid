import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fju0pbb_x.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="fju0pbb_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:polyline-pt"} {...others} />);
}

export default Component;
