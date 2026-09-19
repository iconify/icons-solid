import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/a/af-emcr9h.css';
import '../../css/x/xxag6prjz.css';
import '../../css/h/hfnzkub-p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="af-emcr9h"/><path class="xxag6prjz"/><path class="hfnzkub-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tickets-checked"} {...others} />);
}

export default Component;
