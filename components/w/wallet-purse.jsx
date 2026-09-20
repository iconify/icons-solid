import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/unxg39bqi.css';
import '../../css/f/f7e5bnbcw.css';
import '../../css/e/e_fu26n9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="unxg39bqi"/><path class="f7e5bnbcw"/><path class="e_fu26n9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:wallet-purse"} {...others} />);
}

export default Component;
