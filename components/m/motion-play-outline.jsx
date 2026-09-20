import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzn4iv5xp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mzn4iv5xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:motion-play-outline"} {...others} />);
}

export default Component;
