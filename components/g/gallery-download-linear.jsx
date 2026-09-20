import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zds-drrip.css';
import '../../css/l/lgbc9yk3h.css';
import '../../css/g/gojrz1bnn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zds-drrip"/><path class="lgbc9yk3h"/><path class="gojrz1bnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-download-linear"} {...others} />);
}

export default Component;
