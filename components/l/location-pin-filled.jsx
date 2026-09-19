import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgbmqc20c.css';
import '../../css/r/r-v6gebze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgbmqc20c"/><path class="r-v6gebze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:location-pin-filled"} {...others} />);
}

export default Component;
