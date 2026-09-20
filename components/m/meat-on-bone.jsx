import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kue3stb6i.css';
import '../../css/r/rf975mans.css';
import '../../css/n/no9mdgmge.css';
import '../../css/h/ho1wa2bsp.css';
import '../../css/u/u_3xg9bwv.css';
import '../../css/n/nhn5pra8d.css';
import '../../css/c/cpwwhmbzu.css';
import '../../css/v/v-6g4gbcc.css';
import '../../css/q/q04w-2rnx.css';
import '../../css/p/p5dgvdbkb.css';
import '../../css/r/reber1ehn.css';
import '../../css/c/csns_kk0v.css';
import '../../css/r/rec_4qp_r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kue3stb6i"/><path class="rf975mans"/><path class="no9mdgmge"/><path class="ho1wa2bsp"/><path class="u_3xg9bwv"/><path class="nhn5pra8d"/><path class="cpwwhmbzu"/><path class="v-6g4gbcc"/><path class="q04w-2rnx"/><path class="p5dgvdbkb"/><path class="reber1ehn"/><path class="csns_kk0v"/><path class="rec_4qp_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:meat-on-bone"} {...others} />);
}

export default Component;
