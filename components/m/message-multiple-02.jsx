import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nuct77bmt.css';
import '../../css/e/efm688bib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="nuct77bmt"/><path class="efm688bib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-multiple-02"} {...others} />);
}

export default Component;
