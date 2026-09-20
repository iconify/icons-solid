import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tsn7ane9g.css';
import '../../css/i/iofxr__0e.css';
import '../../css/o/orckdxgbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tsn7ane9g"/><path class="iofxr__0e"/><path class="orckdxgbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-outline"} {...others} />);
}

export default Component;
