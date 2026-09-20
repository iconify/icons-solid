import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4f08dwkt.css';
import '../../css/j/jwkkz0w_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="i4f08dwkt"/><path class="jwkkz0w_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:squares-filled"} {...others} />);
}

export default Component;
