import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmsm-ux3o.css';
import '../../css/w/wc-d_n1dc.css';
import '../../css/u/uytvyw22t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kmsm-ux3o"/><path class="wc-d_n1dc"/><path class="uytvyw22t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:vector-line-curve"} {...others} />);
}

export default Component;
