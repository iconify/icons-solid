import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y97_zp_7r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y97_zp_7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:badminton-racket-and-shuttlecock"} {...others} />);
}

export default Component;
