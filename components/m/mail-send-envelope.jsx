import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/u82ya9bit.css';
import '../../css/b/bl5cldbpq.css';
import '../../css/b/bsr1fndlm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="u82ya9bit"/><path class="bl5cldbpq"/><path class="bsr1fndlm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:mail-send-envelope"} {...others} />);
}

export default Component;
