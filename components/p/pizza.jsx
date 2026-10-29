import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kowg2rbfs.css';
import '../../css/v/v42ajowgs.css';
import '../../css/m/mfrqcfwxy.css';
import '../../css/r/r5syqubsc.css';
import '../../css/j/jwmjtobbn.css';
import '../../css/o/o3emm6zrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="kowg2rbfs wm-shadow"/><path class="v42ajowgs"/><path class="mfrqcfwxy"/><path class="r5syqubsc"/><path class="jwmjtobbn wm-shine"/><path class="o3emm6zrf wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:pizza"} {...others} />);
}

export default Component;
