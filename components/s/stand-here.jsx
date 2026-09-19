import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/poibn3b_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="poibn3b_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:stand-here"} {...others} />);
}

export default Component;
