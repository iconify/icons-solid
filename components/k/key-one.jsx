import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/t/tf-qccb0k.css';
import '../../css/v/vlj15hbcf.css';
import '../../css/h/ht1e-0b_d.css';
import '../../css/i/imof6cy3g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="tf-qccb0k"/><path class="vlj15hbcf"/><path class="ht1e-0b_d"/><path class="imof6cy3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:key-one"} {...others} />);
}

export default Component;
