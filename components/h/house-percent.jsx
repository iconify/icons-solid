import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn1xh-bxh.css';
import '../../css/z/zgrju0gim.css';
import '../../css/a/aocwzbcbu.css';
import '../../css/o/oaafszbzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xn1xh-bxh"/><path class="zgrju0gim"/><circle class="aocwzbcbu"/><circle class="oaafszbzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-percent"} {...others} />);
}

export default Component;
