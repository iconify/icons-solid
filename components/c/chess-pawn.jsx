import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is6qhgqbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="is6qhgqbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:chess-pawn"} {...others} />);
}

export default Component;
