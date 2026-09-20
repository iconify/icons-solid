import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmo_l8brs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmo_l8brs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:advent-of-code"} {...others} />);
}

export default Component;
