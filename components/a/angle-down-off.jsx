import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auesdab7y.css';
import '../../css/v/v9uxtdtin.css';
import '../../css/p/p3s2lwbxe.css';
import '../../css/m/mo3iz1pxq.css';
import '../../css/y/y-87n76xb.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="auesdab7y"/><path class="v9uxtdtin"/><path class="p3s2lwbxe"/><path class="mo3iz1pxq"/><path class="y-87n76xb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:angle-down-off"} {...others} />);
}

export default Component;
