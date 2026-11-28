import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxpg3nbkx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kiwhpbcdm.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mxpg3nbkx secondary"/><g class="dt0cm9dhy primary"><path class="kiwhpbcdm"/><path class="eo_76b8fd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zap-off-duo"} {...others} />);
}

export default Component;
