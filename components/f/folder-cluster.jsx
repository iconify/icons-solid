import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l47nr7bbh.css';
import '../../css/i/ifw64601y.css';
import '../../css/c/crk2_8b3s.css';
import '../../css/p/p4vpu-b1r.css';
import '../../css/j/jb04u0ywk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l47nr7bbh"/><g class="ifw64601y"><circle class="crk2_8b3s"/><circle class="p4vpu-b1r"/><circle class="jb04u0ywk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cluster"} {...others} />);
}

export default Component;
