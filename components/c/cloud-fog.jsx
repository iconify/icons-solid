import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hk0fcv36o.css';
import '../../css/l/lt6yq2bjx.css';
import '../../css/e/eaaxc6h3x.css';
import '../../css/i/i6ntusbzm.css';
import '../../css/j/jydfl8b_u.css';
import '../../css/c/crj7_j6ae.css';
import '../../css/b/b1mu1-bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hk0fcv36o wm-a"/><path class="lt6yq2bjx wm-a"/><path class="eaaxc6h3x wm-a"/><path class="i6ntusbzm wm-k"/><path class="jydfl8b_u wm-k"/><path class="crj7_j6ae wm-k"/><path class="b1mu1-bfy wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-fog"} {...others} />);
}

export default Component;
