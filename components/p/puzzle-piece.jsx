import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5u0dpbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5u0dpbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:puzzle-piece"} {...others} />);
}

export default Component;
