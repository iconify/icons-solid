import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8pgxki_n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v-1ltacmn.css';
import '../../css/z/zzco34bep.css';
import '../../css/k/k9pxhyi7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o8pgxki_n secondary"/><g class="dt0cm9dhy primary"><path class="v-1ltacmn"/><path class="zzco34bep"/><path class="k9pxhyi7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:foldable-closed-duo"} {...others} />);
}

export default Component;
