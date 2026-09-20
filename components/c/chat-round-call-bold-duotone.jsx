import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2fm9-b4c.css';
import '../../css/r/rnav8kb8d.css';
import '../../css/h/h8fjzdb4w.css';
import '../../css/p/pwxlsdbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u2fm9-b4c"/><path clip-rule="evenodd" class="rnav8kb8d"/><path clip-rule="evenodd" class="h8fjzdb4w"/><path class="pwxlsdbcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-call-bold-duotone"} {...others} />);
}

export default Component;
