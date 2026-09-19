import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv4c8bc2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iv4c8bc2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-florist"} {...others} />);
}

export default Component;
