import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri96t0v6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ri96t0v6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tally-2-fill-round"} {...others} />);
}

export default Component;
