import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha2ibjb3r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ha2ibjb3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:droplet-above-outstretched-hand"} {...others} />);
}

export default Component;
