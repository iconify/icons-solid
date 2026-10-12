import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/c/c110yw0hi.css';
import '../../css/w/wjocnli8d.css';
import '../../css/n/na4i35b7t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="c110yw0hi"/><path class="wjocnli8d"/><path class="na4i35b7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-scan"} {...others} />);
}

export default Component;
