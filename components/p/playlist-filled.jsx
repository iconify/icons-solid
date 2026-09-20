import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zj35u12-a.css';
import '../../css/u/ub9e_ibbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="zj35u12-a"/><path class="ub9e_ibbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:playlist-filled"} {...others} />);
}

export default Component;
