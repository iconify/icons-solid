import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p71cm1b1k.css';
import '../../css/e/e3pn2bxuq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="p71cm1b1k"/><path class="e3pn2bxuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:setting-one"} {...others} />);
}

export default Component;
