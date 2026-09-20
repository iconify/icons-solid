import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz13vybci.css';
import '../../css/o/o6j7l_bzu.css';
import '../../css/h/hlkf7fblh.css';
import '../../css/n/nx_eixb0a.css';
import '../../css/k/kgtxr5b2r.css';
import '../../css/n/negkznkvj.css';
import '../../css/h/hdfnbxbke.css';
import '../../css/a/a1r7ye_-y.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="ft5dv1b6b"><path class="qz13vybci"/><path class="o6j7l_bzu"/><path class="hlkf7fblh"/><path class="nx_eixb0a"/><path class="kgtxr5b2r"/><path class="negkznkvj"/><path class="hdfnbxbke"/><path class="a1r7ye_-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tsdown"} {...others} />);
}

export default Component;
