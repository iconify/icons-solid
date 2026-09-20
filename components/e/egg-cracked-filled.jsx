import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udsm0l3hq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udsm0l3hq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:egg-cracked-filled"} {...others} />);
}

export default Component;
