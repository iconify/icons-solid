import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t8drw368i.css';
import '../../css/t/tlma14baz.css';
import '../../css/c/cxhoxcc8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="t8drw368i"/><path class="tlma14baz"/><path class="cxhoxcc8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:accessibility-sharp-duotone"} {...others} />);
}

export default Component;
