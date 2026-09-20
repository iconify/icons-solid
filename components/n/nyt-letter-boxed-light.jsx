import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw3_0y36g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gw3_0y36g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-letter-boxed-light"} {...others} />);
}

export default Component;
