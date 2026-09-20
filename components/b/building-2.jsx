import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c46ku7b9o.css';
import '../../css/f/ffu4kvb2p.css';
import '../../css/n/nfmzilh1u.css';
import '../../css/o/oj757fb6k.css';
import '../../css/i/izihbwbqp.css';
import '../../css/u/ue-b_-2wd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c46ku7b9o"/><path class="ffu4kvb2p"/><path class="nfmzilh1u"/><path class="oj757fb6k"/><path class="izihbwbqp"/><path class="ue-b_-2wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:building-2"} {...others} />);
}

export default Component;
