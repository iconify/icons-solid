import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/evr8ywc1o.css';
import '../../css/s/sgi02vm9s.css';
import '../../css/c/crahcm0qm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="evr8ywc1o"/><path class="sgi02vm9s"/><path class="crahcm0qm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laurel-wreath-left-02"} {...others} />);
}

export default Component;
