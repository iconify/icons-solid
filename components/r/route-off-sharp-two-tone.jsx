import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o41_ooc7v.css';
import '../../css/i/iyd5ldb9t.css';
import '../../css/p/po8ck-bli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="o41_ooc7v"/><path class="iyd5ldb9t"/><path class="po8ck-bli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:route-off-sharp-two-tone"} {...others} />);
}

export default Component;
