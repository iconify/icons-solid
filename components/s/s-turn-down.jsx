import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/x7trl1brq.css';
import '../../css/q/q60wzeb2d.css';
import '../../css/f/fkc-zxhkr.css';
import '../../css/n/n_5reebuh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="x7trl1brq"/><path class="q60wzeb2d"/><path class="fkc-zxhkr"/><circle class="n_5reebuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:s-turn-down"} {...others} />);
}

export default Component;
