import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu_gn0bda.css';
import '../../css/h/hvyr35qny.css';
import '../../css/l/ln3ngtbpp.css';
import '../../css/a/a3v-fdbef.css';
import '../../css/a/a8my1yb9x.css';
import '../../css/r/rhuvdabqa.css';
import '../../css/y/y09khabcc.css';
import '../../css/a/awh7wfzws.css';
import '../../css/b/bn7ns4hqx.css';
import '../../css/k/kw3qpvs8o.css';
import '../../css/w/wk8jaq07i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iu_gn0bda wm-shadow"/><path class="hvyr35qny wm-shadow"/><path class="ln3ngtbpp"/><path class="a3v-fdbef"/><path class="a8my1yb9x"/><path class="rhuvdabqa"/><path class="y09khabcc"/><path class="awh7wfzws"/><path class="bn7ns4hqx"/><path class="kw3qpvs8o"/><path class="wk8jaq07i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:sticky-note"} {...others} />);
}

export default Component;
