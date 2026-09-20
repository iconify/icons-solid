import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vysvq5b-f.css';
import '../../css/n/nfgcsiz9x.css';
import '../../css/b/bo-whzmgw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vysvq5b-f"/><path class="nfgcsiz9x"/><path class="bo-whzmgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:microscope-observation-sciene"} {...others} />);
}

export default Component;
