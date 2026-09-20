import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/omtmf2bsy.css';
import '../../css/s/sm_ahbcmf.css';
import '../../css/z/ztfw5rbkf.css';
import '../../css/w/winkp3b_n.css';
import '../../css/l/l2y8i4nne.css';
import '../../css/k/kvrma2b_g.css';
import '../../css/v/v9znn8a8z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="omtmf2bsy"/><path class="sm_ahbcmf"/><path class="ztfw5rbkf"/><path class="winkp3b_n"/><path class="l2y8i4nne"/><path class="kvrma2b_g"/><path class="v9znn8a8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:fruit-cherry"} {...others} />);
}

export default Component;
