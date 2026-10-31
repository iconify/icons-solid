import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg_d14xro.css';
import '../../css/h/hube6c-_l.css';
import '../../css/u/u7vstwb-v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="mg_d14xro"/><path class="hube6c-_l"/><path class="u7vstwb-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:chicken"} {...others} />);
}

export default Component;
