import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xgfh04b0u.css';
import '../../css/f/fvp0h1bsk.css';
import '../../css/m/miknsv_yb.css';
import '../../css/a/ain1tnbxt.css';
import '../../css/s/sy7kpcbuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xgfh04b0u"/><path class="fvp0h1bsk wm-s"/><path class="miknsv_yb wm-s"/><path class="ain1tnbxt"/><path class="sy7kpcbuo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-plus-duo"} {...others} />);
}

export default Component;
