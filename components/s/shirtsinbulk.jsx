import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxh3rob4u.css';

const viewBox = {"width":1536,"height":1760};
const content = `<path class="uxh3rob4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:shirtsinbulk"} {...others} />);
}

export default Component;
