import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cckv02b_r.css';
import '../../css/b/b3qoqhb-f.css';
import '../../css/m/mrsezmbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cckv02b_r"/><path class="b3qoqhb-f"/><path class="mrsezmbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:discount-50-percent"} {...others} />);
}

export default Component;
