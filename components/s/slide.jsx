import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/s/su1-2fbzp.css';
import '../../css/b/b8e4web8f.css';
import '../../css/d/dvjbylbtm.css';
import '../../css/e/etssapdir.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="su1-2fbzp"/><path class="b8e4web8f"/><path class="dvjbylbtm"/><path class="etssapdir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:slide"} {...others} />);
}

export default Component;
