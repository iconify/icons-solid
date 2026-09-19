import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0ch7qbai.css';
import '../../css/b/bjm4ztbae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0ch7qbai"/><path class="bjm4ztbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-bookmark-star"} {...others} />);
}

export default Component;
