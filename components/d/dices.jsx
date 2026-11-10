import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwmvmcyq.css';
import '../../css/p/p949b0bdu.css';
import '../../css/v/vevgdksff.css';
import '../../css/c/cq3h1kldg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lbwmvmcyq"/><path class="p949b0bdu"/><path class="vevgdksff"/><path class="cq3h1kldg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dices"} {...others} />);
}

export default Component;
