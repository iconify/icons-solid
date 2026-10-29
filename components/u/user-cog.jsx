import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5zor_ndn.css';
import '../../css/m/mcj8uxbod.css';
import '../../css/g/g7o_0db-i.css';
import '../../css/z/zpobyobrs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5zor_ndn wm-k"/><path class="mcj8uxbod wm-k"/><path class="g7o_0db-i wm-s"/><path class="wm-s zpobyobrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:user-cog"} {...others} />);
}

export default Component;
