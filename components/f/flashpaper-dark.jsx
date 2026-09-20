import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3t2t0bcb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n3t2t0bcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flashpaper-dark"} {...others} />);
}

export default Component;
