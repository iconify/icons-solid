import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/ol5-wzh7y.css';
import '../../css/r/rqgi9hb-j.css';
import '../../css/t/to4lpd9vc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ol5-wzh7y"/><path class="rqgi9hb-j"/><path class="to4lpd9vc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vaccine"} {...others} />);
}

export default Component;
