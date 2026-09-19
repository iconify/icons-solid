import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/f/fyw76ccin.css';
import '../../css/g/g6h637vus.css';
import '../../css/h/hsy00uboi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="fyw76ccin"/><path class="g6h637vus"/><path class="hsy00uboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:experiment"} {...others} />);
}

export default Component;
