import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1w22p8jq.css';
import '../../css/i/i388mubqy.css';
import '../../css/v/vc01epbab.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="k1w22p8jq"/><path class="i388mubqy"/><circle class="vc01epbab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:location-man-alt"} {...others} />);
}

export default Component;
