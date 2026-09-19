import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/bp1xjpxzc.css';
import '../../css/z/z76lsyb4e.css';
import '../../css/u/uh4ooq67t.css';
import '../../css/a/at19lzvmi.css';
import '../../css/l/lwq_0750w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="bp1xjpxzc"/><path class="z76lsyb4e"/><path class="uh4ooq67t"/><path class="at19lzvmi"/><path class="lwq_0750w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:beer-mug"} {...others} />);
}

export default Component;
