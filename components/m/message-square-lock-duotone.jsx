import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjb3sybwq.css';
import '../../css/p/py2pseb_g.css';
import '../../css/b/bully7omt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pjb3sybwq"/><path class="py2pseb_g"/><path class="bully7omt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:message-square-lock-duotone"} {...others} />);
}

export default Component;
