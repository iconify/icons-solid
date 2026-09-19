import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tajpx0a2c.css';
import '../../css/c/coj_tccxl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="tajpx0a2c"/><path class="coj_tccxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rope-skipping-one"} {...others} />);
}

export default Component;
