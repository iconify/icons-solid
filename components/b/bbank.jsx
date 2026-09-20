import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfo7ih4ii.css';
import '../../css/u/uo8ej_iun.css';
import '../../css/h/hbsz9tbuj.css';
import '../../css/u/uxr0fqbrg.css';
import '../../css/k/k7hj2lt9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zfo7ih4ii"/><path class="uo8ej_iun"/><path class="hbsz9tbuj"/><path clip-rule="evenodd" class="uxr0fqbrg"/><path class="k7hj2lt9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bbank"} {...others} />);
}

export default Component;
