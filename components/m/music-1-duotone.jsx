import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tje8mb0vx.css';
import '../../css/u/u-6_p02jg.css';
import '../../css/n/n98jbmb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="tje8mb0vx"/><circle class="u-6_p02jg"/><path class="n98jbmb2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:music-1-duotone"} {...others} />);
}

export default Component;
