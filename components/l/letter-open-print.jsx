import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p9kz86d4t.css';
import '../../css/q/qlstdbbsh.css';
import '../../css/l/l1456wbin.css';
import '../../css/i/igeg8hbsd.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p9kz86d4t"/><path class="qlstdbbsh"/><path class="l1456wbin"/><path class="igeg8hbsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:letter-open-print"} {...others} />);
}

export default Component;
