import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia4qhfxyu.css';
import '../../css/m/mrcbqcb_l.css';
import '../../css/g/g25hv4bvf.css';
import '../../css/x/xabmdwboi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ia4qhfxyu"/><path class="mrcbqcb_l"/><path class="g25hv4bvf"/><path class="xabmdwboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:yen-coin-duo"} {...others} />);
}

export default Component;
