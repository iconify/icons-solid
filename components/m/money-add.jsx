import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/j/jz0zqnb4y.css';
import '../../css/p/pmove9s5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="jz0zqnb4y"/><path class="pmove9s5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-add"} {...others} />);
}

export default Component;
