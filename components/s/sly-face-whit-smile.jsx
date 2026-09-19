import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/x/xp-hp_2na.css';
import '../../css/k/khks3ihhz.css';
import '../../css/b/b4jtc2s1i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="xp-hp_2na"/><path class="khks3ihhz"/><path class="b4jtc2s1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sly-face-whit-smile"} {...others} />);
}

export default Component;
