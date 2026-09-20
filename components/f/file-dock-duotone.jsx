import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kw2v_fbbh.css';
import '../../css/g/gu10zdn1y.css';
import '../../css/g/g8js9ibgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kw2v_fbbh"/><path class="gu10zdn1y"/><path class="g8js9ibgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:file-dock-duotone"} {...others} />);
}

export default Component;
