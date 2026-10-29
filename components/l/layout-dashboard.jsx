import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b210xtvup.css';
import '../../css/q/qoeh6jblo.css';
import '../../css/m/m04lsjj3o.css';
import '../../css/j/j8f31cbij.css';
import '../../css/v/vibn9db2x.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b210xtvup wm-shadow"/><path class="qoeh6jblo"/><path class="m04lsjj3o"/><path class="j8f31cbij"/><path class="vibn9db2x wm-shine"/><path class="sloj1fjmk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:layout-dashboard"} {...others} />);
}

export default Component;
