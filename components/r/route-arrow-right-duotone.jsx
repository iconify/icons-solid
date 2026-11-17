import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j82o82bbn.css';
import '../../css/k/knjj2cdia.css';
import '../../css/b/bnrr-abcb.css';
import '../../css/e/eu1_bqbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j82o82bbn"/><path class="knjj2cdia"/><path class="bnrr-abcb"/><path class="eu1_bqbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:route-arrow-right-duotone"} {...others} />);
}

export default Component;
