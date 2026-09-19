import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gcylfc9wp.css';
import '../../css/q/qolps6bdg.css';
import '../../css/k/k_gawg-cs.css';
import '../../css/o/o_culacbz.css';
import '../../css/u/unpip0bkj.css';
import '../../css/n/ns401-kxe.css';
import '../../css/j/jaket1bdm.css';
import '../../css/z/zixh5j4fn.css';
import '../../css/w/wpwkabc3i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gcylfc9wp"/><path class="qolps6bdg"/><path class="k_gawg-cs"/><path class="o_culacbz"/><path class="unpip0bkj"/><path class="ns401-kxe"/><path class="jaket1bdm"/><path class="zixh5j4fn"/><path class="wpwkabc3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clinking-beer-mugs"} {...others} />);
}

export default Component;
