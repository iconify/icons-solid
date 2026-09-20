import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/w/w6shkmb_o.css';
import '../../css/k/kh3gclbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="w6shkmb_o"/><rect class="kh3gclbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:package-box-alt"} {...others} />);
}

export default Component;
