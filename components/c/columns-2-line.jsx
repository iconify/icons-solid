import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osrqvu4up.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osrqvu4up"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:columns-2-line"} {...others} />);
}

export default Component;
