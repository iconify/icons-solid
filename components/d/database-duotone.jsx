import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d0f9rv80k.css';
import '../../css/l/l0-5eybmn.css';
import '../../css/k/kzx4hx4vr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="d0f9rv80k"/><path class="l0-5eybmn"/><path class="kzx4hx4vr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:database-duotone"} {...others} />);
}

export default Component;
