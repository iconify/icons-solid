import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/t/t2_ydfbfg.css';
import '../../css/q/q-xbk7bwr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="t2_ydfbfg"/><path class="q-xbk7bwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:nasal"} {...others} />);
}

export default Component;
