import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osc22vzky.css';
import '../../css/v/vuob-ob_n.css';
import '../../css/k/kl6o0e96n.css';
import '../../css/c/cvgpmeq_r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="osc22vzky"/><path class="vuob-ob_n"/><path class="kl6o0e96n"/><path class="cvgpmeq_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:design-mug"} {...others} />);
}

export default Component;
