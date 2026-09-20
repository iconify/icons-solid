import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/q/qa60wpbeh.css';
import '../../css/x/xm9logb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="qa60wpbeh"/><path class="xm9logb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction-alt-light"} {...others} />);
}

export default Component;
