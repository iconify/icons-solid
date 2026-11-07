import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvude-bvd.css';
import '../../css/r/rgo0fe4hn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvude-bvd"/><path class="rgo0fe4hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:armchair-bold-duotone"} {...others} />);
}

export default Component;
