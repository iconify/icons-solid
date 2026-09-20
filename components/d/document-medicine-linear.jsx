import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-do9_buf.css';
import '../../css/d/d-3h37-ms.css';
import '../../css/o/oqzpqv97y.css';
import '../../css/b/byonj9b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r-do9_buf"/><path class="d-3h37-ms"/><path class="oqzpqv97y"/><path class="byonj9b2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-medicine-linear"} {...others} />);
}

export default Component;
