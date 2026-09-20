import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8l11yg9a.css';
import '../../css/x/xiby4z7mg.css';
import '../../css/g/g7m_9fb1u.css';
import '../../css/c/cj59lz24r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x8l11yg9a"/><path class="xiby4z7mg"/><path class="g7m_9fb1u"/><path clip-rule="evenodd" class="cj59lz24r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-minimalistic-outline"} {...others} />);
}

export default Component;
