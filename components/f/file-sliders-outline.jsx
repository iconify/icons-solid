import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/egz7py4rh.css';
import '../../css/s/s9_vdtbdj.css';
import '../../css/c/cnnjisezc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="egz7py4rh"/><path class="s9_vdtbdj"/><path class="cnnjisezc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-sliders-outline"} {...others} />);
}

export default Component;
