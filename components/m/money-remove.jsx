import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/p/pmove9s5h.css';
import '../../css/j/jb5myo67s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="pmove9s5h"/><path class="jb5myo67s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-remove"} {...others} />);
}

export default Component;
