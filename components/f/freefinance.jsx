import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0ncxjb_s.css';
import '../../css/b/bs_ka8b9z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v0ncxjb_s"/><path class="bs_ka8b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freefinance"} {...others} />);
}

export default Component;
