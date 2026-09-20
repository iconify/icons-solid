import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/paxm8bnar.css';
import '../../css/p/pf74t1b5i.css';
import '../../css/m/m00tzbc5j.css';
import '../../css/c/cqutxybsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="paxm8bnar"/><path class="pf74t1b5i"/><path class="m00tzbc5j"/><path class="cqutxybsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:emoji-heart-eyes"} {...others} />);
}

export default Component;
