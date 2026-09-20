import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe7m4oy-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qe7m4oy-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:music-accidental-sharp"} {...others} />);
}

export default Component;
