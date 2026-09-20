import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/m/mz7fznv6n.css';
import '../../css/m/mzh0lfbpa.css';
import '../../css/j/jcgtg9nlx.css';
import '../../css/t/toc75ln9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="mz7fznv6n"/><path class="mzh0lfbpa"/><path class="jcgtg9nlx"/><path class="toc75ln9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:time-del-light"} {...others} />);
}

export default Component;
