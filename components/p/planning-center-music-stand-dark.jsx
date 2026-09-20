import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7kbt2bqb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i7kbt2bqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center-music-stand-dark"} {...others} />);
}

export default Component;
