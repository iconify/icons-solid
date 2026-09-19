import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ix3kq6qfw.css';
import '../../css/m/m9bppyvts.css';
import '../../css/o/omoqg1bql.css';
import '../../css/k/kucqx858u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ix3kq6qfw"/><path class="m9bppyvts"/><path class="omoqg1bql"/><path class="kucqx858u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:breast-pump"} {...others} />);
}

export default Component;
