import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chavfkb0d.css';
import '../../css/n/ndqk5ofkv.css';
import '../../css/p/pr7s_cc1i.css';
import '../../css/e/ea4mx46dw.css';
import '../../css/a/aeylqebxy.css';
import '../../css/q/qec8-j6uo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="chavfkb0d"/><rect class="ndqk5ofkv"/><path class="pr7s_cc1i"/><path class="ea4mx46dw"/><rect class="aeylqebxy"/><rect class="qec8-j6uo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:game-console-one"} {...others} />);
}

export default Component;
