import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nvdwhob0j.css';
import '../../css/o/ovo6dzb9q.css';
import '../../css/s/sr_evqbow.css';
import '../../css/z/zqh0c1bua.css';
import '../../css/d/d4az0bcly.css';
import '../../css/w/wskt0zbhn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nvdwhob0j wm-deco"/><path class="ovo6dzb9q wm-deco"/><path class="sr_evqbow wm-deco"/><path class="wm-k zqh0c1bua"/><path class="d4az0bcly wm-a"/><path class="wm-k wskt0zbhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:beer-blueprint"} {...others} />);
}

export default Component;
