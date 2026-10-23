import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sl-e9gbkv.css';
import '../../css/y/y3t2ybb7g.css';
import '../../css/j/jfr3fmb8n.css';
import '../../css/c/c_rf7tboi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sl-e9gbkv"/><rect transform="matrix(0 -1 .99957 -.02944 15.36 10.01)" class="y3t2ybb7g"/><path class="jfr3fmb8n"/><path class="c_rf7tboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hair-dryer"} {...others} />);
}

export default Component;
