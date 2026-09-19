import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx-wffkco.css';
import '../../css/p/pke3qdk4w.css';
import '../../css/e/e5k93192z.css';
import '../../css/m/m2gu59eht.css';
import '../../css/l/lymjp8oif.css';
import '../../css/z/zj3ztcu_k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mx-wffkco"/><path class="pke3qdk4w"/><path class="e5k93192z"/><path class="m2gu59eht"/><path class="lymjp8oif"/><path class="zj3ztcu_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:oceanengine"} {...others} />);
}

export default Component;
