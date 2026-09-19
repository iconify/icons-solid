import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bq26k3a0r.css';
import '../../css/h/h6a_i43_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bq26k3a0r"/><path class="h6a_i43_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:catalogue"} {...others} />);
}

export default Component;
