import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/y/ytm95u6wp.css';
import '../../css/l/l2ky_3b3g.css';
import '../../css/o/opk08bbnl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ytm95u6wp"/><path class="l2ky_3b3g"/><circle transform="rotate(-90 13 9)" class="opk08bbnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:u-turn-up"} {...others} />);
}

export default Component;
