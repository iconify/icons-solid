import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k1nzf_apg.css';
import '../../css/u/ukdbqacii.css';
import '../../css/i/i09a7zbwi.css';
import '../../css/y/yd-fuupbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k1nzf_apg"/><path class="ukdbqacii"/><path class="i09a7zbwi"/><path class="yd-fuupbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shelf"} {...others} />);
}

export default Component;
