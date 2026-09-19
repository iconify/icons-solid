import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eynsscb2h.css';
import '../../css/c/c12_yhz0x.css';
import '../../css/z/z6ayittps.css';
import '../../css/s/s43_gvbiw.css';
import '../../css/f/fhvsocmeu.css';
import '../../css/v/v8wpy7byu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="eynsscb2h"/><rect class="c12_yhz0x"/><path class="z6ayittps"/><path class="s43_gvbiw"/><path class="fhvsocmeu"/><path class="v8wpy7byu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:subtract-selection-one"} {...others} />);
}

export default Component;
