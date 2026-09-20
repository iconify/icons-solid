import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6t39xbyu.css';
import '../../css/n/n-y7t6i4r.css';
import '../../css/j/jzj1j7b_h.css';
import '../../css/q/qwgjhnbgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h6t39xbyu"/><path class="n-y7t6i4r"/><rect class="jzj1j7b_h"/><rect class="qwgjhnbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:data-bank"} {...others} />);
}

export default Component;
