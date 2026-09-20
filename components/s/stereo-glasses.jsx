import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uskxbbb4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uskxbbb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:stereo-glasses"} {...others} />);
}

export default Component;
