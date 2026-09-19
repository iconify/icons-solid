import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm-9ezbhd.css';

const viewBox = {"width":464,"height":464};
const content = `<path class="wm-9ezbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:vcard"} {...others} />);
}

export default Component;
