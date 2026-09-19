import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z-4z5xbxi.css';
import '../../css/u/ufknicbap.css';
import '../../css/n/njflbfhjb.css';
import '../../css/s/sz5kttb2f.css';
import '../../css/p/pw94xrbis.css';
import '../../css/d/d3rmsdbxi.css';
import '../../css/e/eqmeevfom.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="z-4z5xbxi"/><path class="ufknicbap"/><path class="njflbfhjb"/><path class="sz5kttb2f"/><path class="pw94xrbis"/><path class="d3rmsdbxi"/><path class="eqmeevfom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dividing-line"} {...others} />);
}

export default Component;
