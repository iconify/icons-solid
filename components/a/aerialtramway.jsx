import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/camx-71ag.css';
import '../../css/h/hgi0e67ec.css';
import '../../css/t/tdew32b9y.css';
import '../../css/a/aal3comfa.css';
import '../../css/z/z0nl3vsbz.css';
import '../../css/k/k8c2nkb-r.css';
import '../../css/z/z5tyw7v_d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="camx-71ag"/><path class="hgi0e67ec"/><path class="tdew32b9y"/><path class="aal3comfa"/><path class="z0nl3vsbz"/><path class="k8c2nkb-r"/><path class="z5tyw7v_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:aerialtramway"} {...others} />);
}

export default Component;
