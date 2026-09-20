import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rca1_3t3r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rca1_3t3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:chess-pawn-solid"} {...others} />);
}

export default Component;
