import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atl1ue-ei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="atl1ue-ei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:bluesky"} {...others} />);
}

export default Component;
