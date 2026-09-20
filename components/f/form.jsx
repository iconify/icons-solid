import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l9wlv6bwf.css';
import '../../css/l/laxg67brp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="l9wlv6bwf"/><path class="laxg67brp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:form"} {...others} />);
}

export default Component;
