import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p52gpacak.css';
import '../../css/v/vz9gfvbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p52gpacak"/><path class="vz9gfvbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-letter-spacing"} {...others} />);
}

export default Component;
