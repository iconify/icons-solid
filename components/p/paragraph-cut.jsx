import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vouxnjwyh.css';
import '../../css/i/iz_gtfbhi.css';
import '../../css/e/euwvmeb7s.css';
import '../../css/b/b8pb9wbpx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vouxnjwyh"/><path class="iz_gtfbhi"/><path class="euwvmeb7s"/><path class="b8pb9wbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:paragraph-cut"} {...others} />);
}

export default Component;
