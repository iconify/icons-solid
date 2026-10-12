import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c413qfd-x.css';
import '../../css/k/kdck7fbvx.css';
import '../../css/g/g3fmatb8b.css';
import '../../css/r/rgggbcbui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c413qfd-x"/><path class="kdck7fbvx"/><path class="g3fmatb8b"/><path class="rgggbcbui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-user-duotone"} {...others} />);
}

export default Component;
