import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gircq4sqa.css';
import '../../css/a/a9wz156rm.css';
import '../../css/g/gye5x8kso.css';
import '../../css/f/fhcdiobpo.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gircq4sqa"/><path class="a9wz156rm"/><path class="gye5x8kso"/><path class="fhcdiobpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:share-ios-print"} {...others} />);
}

export default Component;
