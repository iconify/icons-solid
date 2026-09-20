import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo-hi3hch.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uo-hi3hch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:sound-mute-solid"} {...others} />);
}

export default Component;
