import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a125j6bwn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ltjxwnb3f.css';
import '../../css/b/b3s_nab_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a125j6bwn secondary"/><g class="dt0cm9dhy primary"><path class="ltjxwnb3f"/><path class="b3s_nab_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:droplets-duo"} {...others} />);
}

export default Component;
