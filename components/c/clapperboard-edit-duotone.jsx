import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lvwbaqb1f.css';
import '../../css/g/g1jyq1e1a.css';
import '../../css/k/kfalkfbzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lvwbaqb1f"/><path clip-rule="evenodd" class="g1jyq1e1a"/><path class="kfalkfbzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clapperboard-edit-duotone"} {...others} />);
}

export default Component;
