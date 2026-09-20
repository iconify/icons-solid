import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gayebnb-o.css';
import '../../css/r/rmc1u9j4i.css';
import '../../css/o/om4lnzbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gayebnb-o"/><path class="rmc1u9j4i"/><path class="om4lnzbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-field-focus-linear"} {...others} />);
}

export default Component;
