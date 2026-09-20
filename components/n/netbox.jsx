import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhsc1vb_v.css';
import '../../css/w/wpob71b5x.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="dhsc1vb_v"/><path class="wpob71b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:netbox"} {...others} />);
}

export default Component;
