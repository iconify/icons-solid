import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzopzya5k.css';
import '../../css/z/zi8fv1mfa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hzopzya5k"/><path class="zi8fv1mfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-connections"} {...others} />);
}

export default Component;
