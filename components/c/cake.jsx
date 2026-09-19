import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/l/lj5mv4-ax.css';
import '../../css/x/x4c5zgb8o.css';
import '../../css/a/adnqnybwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="lj5mv4-ax"/><path class="x4c5zgb8o"/><path class="adnqnybwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:cake"} {...others} />);
}

export default Component;
