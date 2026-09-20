import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvjqh6bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kvjqh6bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:map-marker-minus"} {...others} />);
}

export default Component;
