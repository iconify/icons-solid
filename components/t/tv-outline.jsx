import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyok70tso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nyok70tso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:tv-outline"} {...others} />);
}

export default Component;
