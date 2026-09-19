import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/d/d7m39n8ut.css';
import '../../css/j/j_rqjlipb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="d7m39n8ut"/><path class="j_rqjlipb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tag"} {...others} />);
}

export default Component;
