import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cu1491zmm.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/v/v_cyp7bey.css';
import '../../css/n/n3am1gblp.css';
import '../../css/k/kva043bzk.css';
import '../../css/t/t26d7g3rg.css';
import '../../css/b/bdz-ljbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cu1491zmm"/><path class="rsrhfac5n"/><path class="v_cyp7bey"/><path class="n3am1gblp"/><path class="kva043bzk"/><path class="t26d7g3rg"/><path class="bdz-ljbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:webcam-off-linear"} {...others} />);
}

export default Component;
