import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/y/yc-rindwg.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kw_c2t8fb.css';
import '../../css/o/oqc5_nb5e.css';
import '../../css/l/li13oht6i.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGhifbLbfL" class="n1mjunbsu"><path class="yc-rindwg"/></mask><g class="ft5dv1b6b"><path class="kw_c2t8fb"/><path mask="url(#SVGhifbLbfL)" class="oqc5_nb5e"/><path class="li13oht6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:cloudia"} {...others} />);
}

export default Component;
