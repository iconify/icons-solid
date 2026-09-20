import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psyvrlurn.css';
import '../../css/p/p_dg5vb3w.css';
import '../../css/q/q592npm9f.css';
import '../../css/b/br0rr8bju.css';
import '../../css/f/fp9jn1bmm.css';
import '../../css/i/iqpcuz_jn.css';
import '../../css/w/w3q1mzb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="psyvrlurn"/><path class="p_dg5vb3w"/><path class="q592npm9f"/><path class="br0rr8bju"/><path class="fp9jn1bmm"/><path class="iqpcuz_jn"/><path class="w3q1mzb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:browser-page-layout"} {...others} />);
}

export default Component;
