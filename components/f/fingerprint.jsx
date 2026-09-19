import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h919i69mc.css';
import '../../css/a/aosxdz-mw.css';
import '../../css/e/eqjj6acuc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="h919i69mc"/><path class="aosxdz-mw"/><path class="eqjj6acuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:fingerprint"} {...others} />);
}

export default Component;
