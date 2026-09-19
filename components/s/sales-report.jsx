import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/a/a1l92fp8o.css';
import '../../css/z/zs0dq3rum.css';
import '../../css/f/f04qxlbak.css';
import '../../css/c/ctq33tw3u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="a1l92fp8o"/><path class="zs0dq3rum"/><path class="f04qxlbak"/><path class="ctq33tw3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sales-report"} {...others} />);
}

export default Component;
