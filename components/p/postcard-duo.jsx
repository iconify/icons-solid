import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3j61ireo.css';
import '../../css/l/ldr45lmns.css';
import '../../css/c/cgiyyk3-r.css';
import '../../css/x/xwp24ikoc.css';
import '../../css/w/wy8odfbvs.css';
import '../../css/z/zl_ax0bky.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="n3j61ireo"/><path clip-rule="evenodd" class="ldr45lmns"/><path class="cgiyyk3-r"/><path class="xwp24ikoc"/><path clip-rule="evenodd" class="wy8odfbvs"/><path class="zl_ax0bky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:postcard-duo"} {...others} />);
}

export default Component;
