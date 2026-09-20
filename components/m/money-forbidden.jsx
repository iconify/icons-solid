import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/z/zyhn94bau.css';
import '../../css/b/btyk7mbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="zyhn94bau"/><path class="btyk7mbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-forbidden"} {...others} />);
}

export default Component;
