import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjo6lzbjj.css';
import '../../css/z/zsyqn_b5h.css';
import '../../css/s/s8895pbfj.css';
import '../../css/k/kdq9x8bsz.css';
import '../../css/h/ho11z_3ux.css';
import '../../css/m/mmo8qtb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bjo6lzbjj wm-shadow"/><path class="wm-shadow zsyqn_b5h"/><path class="s8895pbfj"/><path class="kdq9x8bsz"/><path class="ho11z_3ux wm-shine"/><path class="mmo8qtb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:minus"} {...others} />);
}

export default Component;
