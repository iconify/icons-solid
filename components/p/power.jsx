import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sqiesib6f.css';
import '../../css/z/z8yrlnbgc.css';
import '../../css/k/kriwjcysg.css';
import '../../css/p/pvyem74vm.css';
import '../../css/h/h-va-tb1f.css';
import '../../css/h/huiuci-zd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sqiesib6f wm-shadow"/><path class="z8yrlnbgc"/><path class="kriwjcysg"/><path class="pvyem74vm"/><path class="h-va-tb1f"/><path class="huiuci-zd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:power"} {...others} />);
}

export default Component;
