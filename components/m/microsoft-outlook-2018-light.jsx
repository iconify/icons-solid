import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8jf6yr1a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y8jf6yr1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-outlook-2018-light"} {...others} />);
}

export default Component;
