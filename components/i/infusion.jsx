import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/w19n41b8s.css';
import '../../css/z/zslw-jbti.css';
import '../../css/g/g07kgbb_e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="w19n41b8s"/><path class="zslw-jbti"/><path class="g07kgbb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:infusion"} {...others} />);
}

export default Component;
