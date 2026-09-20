import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kfvnd7u4f.css';
import '../../css/l/lol1cdbxs.css';
import '../../css/i/it6wt52-j.css';
import '../../css/g/gl7fqlbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kfvnd7u4f"/><path class="lol1cdbxs"/><path class="it6wt52-j"/><path class="gl7fqlbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:password-bold-duotone"} {...others} />);
}

export default Component;
