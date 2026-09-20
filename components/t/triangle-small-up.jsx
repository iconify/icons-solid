import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi1ur8_xp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zi1ur8_xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:triangle-small-up"} {...others} />);
}

export default Component;
