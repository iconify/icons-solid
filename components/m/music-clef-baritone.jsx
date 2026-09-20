import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7gjx6cup.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w7gjx6cup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:music-clef-baritone"} {...others} />);
}

export default Component;
