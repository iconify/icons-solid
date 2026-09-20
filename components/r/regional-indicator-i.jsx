import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htu6zoakn.css';
import '../../css/i/iz026krfb.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/z/z299p9xzk.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="htu6zoakn"/><path class="iz026krfb"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="z299p9xzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-i"} {...others} />);
}

export default Component;
