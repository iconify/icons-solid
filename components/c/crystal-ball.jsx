import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sm5_z2x2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sm5_z2x2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:crystal-ball"} {...others} />);
}

export default Component;
