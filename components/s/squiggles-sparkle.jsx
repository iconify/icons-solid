import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umzj1wb-f.css';
import '../../css/m/mt41_nycl.css';
import '../../css/i/i_o47vnuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="umzj1wb-f"/><path class="mt41_nycl"/><path class="i_o47vnuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:squiggles-sparkle"} {...others} />);
}

export default Component;
