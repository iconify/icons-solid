import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hwsatebiw.css';
import '../../css/o/owpwwqk3u.css';
import '../../css/m/mhvwe6kpv.css';
import '../../css/h/hkv497rkj.css';
import '../../css/b/bdc58e89t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hwsatebiw wm-shadow"/><path class="owpwwqk3u"/><path class="mhvwe6kpv"/><path class="hkv497rkj"/><path class="bdc58e89t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:tent"} {...others} />);
}

export default Component;
