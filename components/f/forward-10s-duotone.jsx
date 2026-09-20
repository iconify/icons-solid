import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fhpl0-3an.css';
import '../../css/l/lz4m_yb4l.css';
import '../../css/i/ivzdjnbcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="fhpl0-3an"/><path clip-rule="evenodd" class="lz4m_yb4l"/><path clip-rule="evenodd" class="ivzdjnbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:forward-10s-duotone"} {...others} />);
}

export default Component;
