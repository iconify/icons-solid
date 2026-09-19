import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol09ncwdf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ol09ncwdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:sonos-playbase"} {...others} />);
}

export default Component;
