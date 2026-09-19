import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/s/s7b52r5km.css';
import '../../css/b/bmxotabag.css';
import '../../css/a/ayzfl18ie.css';
import '../../css/a/ak7elgies.css';
import '../../css/z/ztpzmv27e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="s7b52r5km"/><path class="bmxotabag"/><path class="ayzfl18ie"/><path class="ak7elgies"/><path class="ztpzmv27e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cruise"} {...others} />);
}

export default Component;
