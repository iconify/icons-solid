import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gcr02b5uc.css';
import '../../css/r/rwwgj6bod.css';
import '../../css/o/oup32ob_s.css';
import '../../css/o/o20yc4-ei.css';
import '../../css/t/t3azmd0xu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gcr02b5uc"/><path class="rwwgj6bod"/><path class="oup32ob_s"/><path class="o20yc4-ei"/><path class="t3azmd0xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:convert-pdf-1-flat"} {...others} />);
}

export default Component;
