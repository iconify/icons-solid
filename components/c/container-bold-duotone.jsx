import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1wukabrr.css';
import '../../css/j/jy6950b6a.css';
import '../../css/v/v2n5lwbnn.css';
import '../../css/z/zwqh3bbos.css';
import '../../css/o/otqkq7b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m1wukabrr"/><path class="jy6950b6a"/><path class="v2n5lwbnn"/><path class="zwqh3bbos"/><path class="otqkq7b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-bold-duotone"} {...others} />);
}

export default Component;
