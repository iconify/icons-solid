import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4xinab9i.css';
import '../../css/p/pq64lglul.css';
import '../../css/v/vfmtqtm3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i4xinab9i"/><path class="pq64lglul"/><path class="vfmtqtm3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:devices-bold-duotone"} {...others} />);
}

export default Component;
