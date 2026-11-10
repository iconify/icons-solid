import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vn7t8vthh.css';
import '../../css/c/c7sjr7bpo.css';
import '../../css/l/leaqxkbcc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vn7t8vthh"/><path class="c7sjr7bpo"/><path class="leaqxkbcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:repost"} {...others} />);
}

export default Component;
