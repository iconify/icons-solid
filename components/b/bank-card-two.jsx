import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lcs_r-tfw.css';
import '../../css/v/vx77j8bxg.css';
import '../../css/x/xupzaydsh.css';
import '../../css/v/vzdx5c9so.css';
import '../../css/r/rh-s7xmlw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="lcs_r-tfw"/><path class="vx77j8bxg"/><path class="xupzaydsh"/><path class="vzdx5c9so"/><path class="rh-s7xmlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bank-card-two"} {...others} />);
}

export default Component;
