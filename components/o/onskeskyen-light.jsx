import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcm3z1pyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pcm3z1pyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onskeskyen-light"} {...others} />);
}

export default Component;
