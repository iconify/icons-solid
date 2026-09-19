import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sv2r7lb7q.css';
import '../../css/x/x-tgmbczx.css';
import '../../css/c/cxnfnyb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="sv2r7lb7q"/><path class="x-tgmbczx"/><path class="cxnfnyb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:building-06"} {...others} />);
}

export default Component;
