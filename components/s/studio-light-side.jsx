import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gd19j4ann.css';
import '../../css/s/sj2q25bal.css';
import '../../css/h/hxl93l8oj.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gd19j4ann"/><path class="sj2q25bal"/><path class="hxl93l8oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:studio-light-side"} {...others} />);
}

export default Component;
