import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2k4rcbma.css';
import '../../css/n/npblxp04p.css';
import '../../css/n/n3n5idbee.css';
import '../../css/u/ugfymdbif.css';
import '../../css/a/axw_ngf8y.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="h2k4rcbma"/><path class="npblxp04p"/><path class="n3n5idbee"/><path class="ugfymdbif"/><path class="axw_ngf8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:expand-print"} {...others} />);
}

export default Component;
