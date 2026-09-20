import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj4en1bzz.css';
import '../../css/i/i13ucwb9r.css';
import '../../css/b/bwm_wlbvk.css';
import '../../css/i/iklvzvk3a.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/z/z_6k8jbjl.css';
import '../../css/o/o5uwq8bko.css';
import '../../css/z/z7znq7b5r.css';
import '../../css/n/n1jolxbfs.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xj4en1bzz"/><path class="i13ucwb9r"/><path class="bwm_wlbvk"/><path class="iklvzvk3a"/><g class="kdz4acc8r"><path class="z_6k8jbjl"/><path class="o5uwq8bko"/><path class="z7znq7b5r"/><path class="n1jolxbfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:contacts"} {...others} />);
}

export default Component;
