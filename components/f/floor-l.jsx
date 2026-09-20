import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/incm1-bei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="incm1-bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:floor-l"} {...others} />);
}

export default Component;
