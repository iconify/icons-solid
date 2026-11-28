import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf3u8xbnb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sf3u8xbnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:heart-crack"} {...others} />);
}

export default Component;
