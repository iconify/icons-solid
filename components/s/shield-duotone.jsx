import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qectn2b4w.css';
import '../../css/i/i5rzi5b_y.css';
import '../../css/k/kc6w967lp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qectn2b4w"/><path class="i5rzi5b_y"/><path class="kc6w967lp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shield-duotone"} {...others} />);
}

export default Component;
