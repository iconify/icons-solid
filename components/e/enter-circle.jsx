import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/go7h00xnw.css';
import '../../css/y/y71x6_osi.css';
import '../../css/m/mqjuz14-v.css';
import '../../css/e/e0fuurbwv.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="go7h00xnw"/><path class="y71x6_osi"/><path class="mqjuz14-v"/><path class="e0fuurbwv"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:enter-circle"} {...others} />);
}

export default Component;
