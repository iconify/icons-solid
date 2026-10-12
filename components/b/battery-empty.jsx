import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ocnbx1aid.css';
import '../../css/l/lrk8ibamu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="ocnbx1aid"/><path class="lrk8ibamu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:battery-empty"} {...others} />);
}

export default Component;
