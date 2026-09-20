import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xhk16vb3f.css';
import '../../css/v/vlokx2fyg.css';
import '../../css/o/oz-flyblx.css';
import '../../css/l/liumvpb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xhk16vb3f"/><path class="vlokx2fyg"/><path class="oz-flyblx"/><path class="liumvpb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:watch-square-disable"} {...others} />);
}

export default Component;
