import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyo4gfb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cyo4gfb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:star-three-points-outline"} {...others} />);
}

export default Component;
