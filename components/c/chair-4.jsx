import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtk-ex65l.css';
import '../../css/z/zqolkm1kx.css';
import '../../css/q/qrl-igbkn.css';
import '../../css/x/xmd8-3b4t.css';
import '../../css/k/kn8x0mbmc.css';
import '../../css/o/ovqduieyn.css';
import '../../css/z/zjqwsacxz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jtk-ex65l"/><path class="zqolkm1kx"/><path class="qrl-igbkn"/><path class="xmd8-3b4t"/><path class="kn8x0mbmc"/><path class="ovqduieyn"/><path class="zjqwsacxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chair-4"} {...others} />);
}

export default Component;
