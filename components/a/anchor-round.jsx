import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l19gb-b2o.css';
import '../../css/u/udktnefhk.css';
import '../../css/m/mew8rkbaq.css';
import '../../css/o/okle5cb-l.css';
import '../../css/v/v_uvoc_bw.css';
import '../../css/b/bq-zlubjd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="l19gb-b2o"/><path class="udktnefhk"/><path class="mew8rkbaq"/><circle class="okle5cb-l"/><circle class="v_uvoc_bw"/><circle class="bq-zlubjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:anchor-round"} {...others} />);
}

export default Component;
