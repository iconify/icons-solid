import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n_6kqbh0h.css';
import '../../css/a/aurb_obnv.css';
import '../../css/i/i-b1b9mbj.css';
import '../../css/m/mssc0fbma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n_6kqbh0h"/><path class="aurb_obnv"/><path class="i-b1b9mbj"/><path class="mssc0fbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cash-out-line-duotone"} {...others} />);
}

export default Component;
