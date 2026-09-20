import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as3aqyb5d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="as3aqyb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tipi-campsite-and-droplet"} {...others} />);
}

export default Component;
