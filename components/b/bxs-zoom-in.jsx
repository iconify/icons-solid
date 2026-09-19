import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny_2a6iec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ny_2a6iec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-zoom-in"} {...others} />);
}

export default Component;
