import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0aegk_3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r0aegk_3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:movie-plus"} {...others} />);
}

export default Component;
