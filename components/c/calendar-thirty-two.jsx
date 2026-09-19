import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/q/qeckrcnms.css';
import '../../css/d/de-808btv.css';
import '../../css/k/k24pj97po.css';
import '../../css/c/c4kvynbaq.css';
import '../../css/b/bojyjcc5o.css';
import '../../css/h/hma_ygjvn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="qeckrcnms"/><path clip-rule="evenodd" class="de-808btv"/><path class="k24pj97po"/><path class="c4kvynbaq"/><path class="bojyjcc5o"/><path class="hma_ygjvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:calendar-thirty-two"} {...others} />);
}

export default Component;
