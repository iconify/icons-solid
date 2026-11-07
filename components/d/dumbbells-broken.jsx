import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bjy7ielyu.css';
import '../../css/o/oumnh7bvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bjy7ielyu"/><path class="oumnh7bvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-broken"} {...others} />);
}

export default Component;
