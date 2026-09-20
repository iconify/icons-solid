import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cy4sqnj9t.css';
import '../../css/w/wms1q8geo.css';
import '../../css/o/ofhvs956t.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cy4sqnj9t"/><path clip-rule="evenodd" class="wms1q8geo"/><path class="ofhvs956t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:share-android"} {...others} />);
}

export default Component;
