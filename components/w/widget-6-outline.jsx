import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/soebv7bnk.css';
import '../../css/e/enyu0rb5l.css';
import '../../css/p/pftixzbqf.css';
import '../../css/w/wtyu72bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="soebv7bnk"/><path class="enyu0rb5l"/><path class="pftixzbqf"/><path class="wtyu72bbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-6-outline"} {...others} />);
}

export default Component;
