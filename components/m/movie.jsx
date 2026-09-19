import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mz340mupd.css';
import '../../css/t/tf50nbcui.css';
import '../../css/k/k_gln431r.css';
import '../../css/h/hjf33hblc.css';
import '../../css/e/ea45vytfc.css';
import '../../css/a/aj5smcbxj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="mz340mupd"/><path class="tf50nbcui"/><path class="k_gln431r"/><path class="hjf33hblc"/><path class="ea45vytfc"/><path class="aj5smcbxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:movie"} {...others} />);
}

export default Component;
