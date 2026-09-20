import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhyobxb3x.css';
import '../../css/n/n5pc_4b3q.css';
import '../../css/t/tuydoubrl.css';
import '../../css/n/nil41uvbb.css';
import '../../css/h/hbtn9tbto.css';
import '../../css/t/tg12-wb6d.css';
import '../../css/k/ku1w7b1cl.css';
import '../../css/m/mer00ebvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xhyobxb3x"/><path class="n5pc_4b3q"/><path class="tuydoubrl"/><path class="nil41uvbb"/><path class="hbtn9tbto"/><path class="tg12-wb6d"/><path class="ku1w7b1cl"/><path class="mer00ebvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:saving-dog-guard-decrease"} {...others} />);
}

export default Component;
