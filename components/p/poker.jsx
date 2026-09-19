import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/s/sxx9kbcui.css';
import '../../css/u/u-7u5koqq.css';
import '../../css/d/dt7mfmbea.css';
import '../../css/y/y0t2_6s_t.css';
import '../../css/q/qnx9txbsl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="sxx9kbcui"/><path clip-rule="evenodd" class="u-7u5koqq"/><path class="dt7mfmbea"/><path class="y0t2_6s_t"/><path class="qnx9txbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:poker"} {...others} />);
}

export default Component;
