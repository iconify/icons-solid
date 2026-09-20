import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ugtn2gb9g.css';
import '../../css/i/i3289rbus.css';
import '../../css/l/lsbtr9k-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ugtn2gb9g"/><path clip-rule="evenodd" class="i3289rbus"/><path class="lsbtr9k-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gallery-wide-bold-duotone"} {...others} />);
}

export default Component;
