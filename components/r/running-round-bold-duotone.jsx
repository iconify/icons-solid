import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7991xb5z.css';
import '../../css/m/muotmj8bl.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/vi2_iacgi.css';
import '../../css/n/n3ijr1bwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i7991xb5z"/><path clip-rule="evenodd" class="muotmj8bl"/><g class="mc2zb0bvp"><path class="vi2_iacgi"/><path class="n3ijr1bwe"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-round-bold-duotone"} {...others} />);
}

export default Component;
