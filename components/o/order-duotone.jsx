import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_-2gnldk.css';
import '../../css/a/apr74j14w.css';
import '../../css/y/yh718lb0i.css';
import '../../css/z/zddop2b3l.css';
import '../../css/n/nndumi9fj.css';
import '../../css/p/p52_gybvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="f_-2gnldk"/><path class="apr74j14w"/><rect class="yh718lb0i"/><rect class="zddop2b3l"/><rect class="nndumi9fj"/><rect class="p52_gybvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:order-duotone"} {...others} />);
}

export default Component;
