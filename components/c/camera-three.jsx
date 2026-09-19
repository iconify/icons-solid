import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/r/rd9mw5o4z.css';
import '../../css/x/x39a_dbqm.css';
import '../../css/u/u4h-v8rsq.css';
import '../../css/l/lsfq8fbcl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="rd9mw5o4z"/><path class="x39a_dbqm"/><circle class="u4h-v8rsq"/><path class="lsfq8fbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:camera-three"} {...others} />);
}

export default Component;
