import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b_pl27b6t.css';
import '../../css/z/ziild8bri.css';
import '../../css/t/t4ido_b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b_pl27b6t"/><path class="ziild8bri"/><path class="t4ido_b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-not-found-03"} {...others} />);
}

export default Component;
