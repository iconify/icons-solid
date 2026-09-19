import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/o/oyn13xb2d.css';
import '../../css/l/lvd3isp5a.css';
import '../../css/n/nsxoau40d.css';
import '../../css/r/ru-l17y9a.css';
import '../../css/g/gv5rt9o8v.css';
import '../../css/e/efer-abvh.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="oyn13xb2d"/><path class="lvd3isp5a"/><path class="nsxoau40d"/></g><path class="ru-l17y9a"/><path class="gv5rt9o8v"/><path class="efer-abvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:shuffle-print"} {...others} />);
}

export default Component;
