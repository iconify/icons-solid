import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5xnp4tqf.css';
import '../../css/n/nf1ftjslz.css';
import '../../css/q/q9xg3h76r.css';
import '../../css/j/jbzvj5l8s.css';
import '../../css/n/n_928wbci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l5xnp4tqf"/><path class="nf1ftjslz"/><path class="q9xg3h76r"/><path class="jbzvj5l8s"/><path class="n_928wbci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-refresh"} {...others} />);
}

export default Component;
