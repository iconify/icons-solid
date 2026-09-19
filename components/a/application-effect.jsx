import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/btfknrzgi.css';
import '../../css/a/akwxa_yxs.css';
import '../../css/p/p5elmg96x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="btfknrzgi"/><path class="akwxa_yxs"/><path class="p5elmg96x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:application-effect"} {...others} />);
}

export default Component;
