import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_jfne-ha.css';
import '../../css/b/b04w6ibzc.css';
import '../../css/x/xus_l3b-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="p_jfne-ha"/><path class="b04w6ibzc"/><path class="xus_l3b-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:del-alt-fill"} {...others} />);
}

export default Component;
