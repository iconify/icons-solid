import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hyc2c-b2m.css';
import '../../css/h/ht7dbqbbi.css';
import '../../css/c/cijc94bgc.css';
import '../../css/h/hd0vlg_it.css';
import '../../css/k/ky6dy7bbt.css';
import '../../css/k/kitqoe07x.css';
import '../../css/q/qt4v62lyo.css';
import '../../css/r/r-kl53ogr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hyc2c-b2m wm-shadow"/><path class="ht7dbqbbi wm-k"/><path class="cijc94bgc wm-k"/><path class="hd0vlg_it wm-k"/><path class="ky6dy7bbt wm-k"/><path class="kitqoe07x wm-k"/><path class="qt4v62lyo wm-s"/><path class="r-kl53ogr wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:unlink"} {...others} />);
}

export default Component;
