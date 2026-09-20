import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32ajpbkq.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h32ajpbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-curvy-both-direction-1-both-direction-arrow-curvy-diagram-zigzag-horizontal"} {...others} />);
}

export default Component;
