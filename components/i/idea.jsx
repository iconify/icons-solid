import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/evo6_f59a.css';
import '../../css/h/hqe145bzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="evo6_f59a"/><path class="hqe145bzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:idea"} {...others} />);
}

export default Component;
