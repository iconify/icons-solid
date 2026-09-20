import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kmqwx5bdw.css';
import '../../css/p/polbdngrx.css';
import '../../css/u/uwoegob-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kmqwx5bdw"/><path clip-rule="evenodd" class="polbdngrx"/><path clip-rule="evenodd" class="uwoegob-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:turntable-bold-duotone"} {...others} />);
}

export default Component;
