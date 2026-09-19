import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fociy7cic.css';
import '../../css/d/dovfw9bbq.css';
import '../../css/k/kmh7-abfx.css';
import '../../css/m/m590xwjxi.css';
import '../../css/q/qpny3e4gk.css';
import '../../css/k/kaaor7bdu.css';
import '../../css/x/xiobq1b8c.css';
import '../../css/h/hvxokccdm.css';
import '../../css/x/x0-92gb9j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="fociy7cic"/><path class="dovfw9bbq"/><path class="kmh7-abfx"/><circle class="m590xwjxi"/><circle class="qpny3e4gk"/><path class="kaaor7bdu"/><path class="xiobq1b8c"/><path class="hvxokccdm"/><path class="x0-92gb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bus-one"} {...others} />);
}

export default Component;
