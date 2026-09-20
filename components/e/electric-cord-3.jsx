import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/n/n_0y57q2y.css';
import '../../css/p/pud426lit.css';
import '../../css/r/rws_w2lsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="n_0y57q2y"/><path class="pud426lit"/><path class="rws_w2lsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:electric-cord-3"} {...others} />);
}

export default Component;
