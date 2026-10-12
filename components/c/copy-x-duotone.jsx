import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pn2l2mwhp.css';
import '../../css/y/y2-q-oasx.css';
import '../../css/y/ytv39-yuk.css';
import '../../css/y/y9gl3lbmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pn2l2mwhp"/><path class="y2-q-oasx"/><path class="ytv39-yuk"/><path class="y9gl3lbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:copy-x-duotone"} {...others} />);
}

export default Component;
