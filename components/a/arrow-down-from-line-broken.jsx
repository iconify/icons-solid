import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mzpfazf1m.css';
import '../../css/x/xwy_nd-iu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mzpfazf1m"/><path class="xwy_nd-iu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-from-line-broken"} {...others} />);
}

export default Component;
