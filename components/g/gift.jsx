import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjshwpbyb.css';
import '../../css/a/a_p7us8mf.css';
import '../../css/s/ss28ywb2k.css';
import '../../css/p/pmzs0tmcf.css';
import '../../css/b/bov2ir9ks.css';
import '../../css/e/e2m-l-b1y.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zjshwpbyb"/><path clip-rule="evenodd" class="a_p7us8mf"/><path class="ss28ywb2k"/><path class="pmzs0tmcf"/><path clip-rule="evenodd" class="bov2ir9ks"/><path clip-rule="evenodd" class="e2m-l-b1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:gift"} {...others} />);
}

export default Component;
