import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr2a8d89r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rr2a8d89r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-older-woman-gloss"} {...others} />);
}

export default Component;
