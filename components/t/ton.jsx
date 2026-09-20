import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ri238lb_r.css';
import '../../css/p/pkupc97st.css';

const viewBox = {"width":56,"height":56};
const content = `<g class="ft5dv1b6b"><path class="ri238lb_r"/><path class="pkupc97st"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ton"} {...others} />);
}

export default Component;
