import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2axwnfxm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vusvbkbzl.css';
import '../../css/w/w0vfi_bgw.css';
import '../../css/z/zrlh-6b7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2axwnfxm secondary"/><g class="dt0cm9dhy primary"><path class="vusvbkbzl"/><path class="w0vfi_bgw"/><path class="zrlh-6b7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bandage-duo"} {...others} />);
}

export default Component;
