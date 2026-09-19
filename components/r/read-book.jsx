import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zzgr2_bma.css';
import '../../css/b/b6mu38bbk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="zzgr2_bma"/><circle class="b6mu38bbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:read-book"} {...others} />);
}

export default Component;
