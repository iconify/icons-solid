import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/q13-ybnad.css';
import '../../css/h/h2gzysb1p.css';
import '../../css/k/kcg-cvbpu.css';
import '../../css/p/pjk4hybgg.css';
import '../../css/l/l69pirb4g.css';
import '../../css/z/z8-ianbji.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="q13-ybnad"/><rect transform="rotate(-30 4.241 15.778)" class="h2gzysb1p"/><path class="kcg-cvbpu"/><rect transform="rotate(-30 26.401 34.16)" class="pjk4hybgg"/><path class="l69pirb4g"/><path class="z8-ianbji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:selfie"} {...others} />);
}

export default Component;
