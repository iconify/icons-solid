import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/m7tn6kmes.css';
import '../../css/z/zch9i-a1h.css';
import '../../css/z/zg_q-wb7c.css';
import '../../css/m/mx8624bdl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="m7tn6kmes"/><path class="zch9i-a1h"/><path class="zg_q-wb7c"/><path class="mx8624bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:politics-vote-2"} {...others} />);
}

export default Component;
