import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uj6cy7lst.css';
import '../../css/v/v54vc0bdn.css';
import '../../css/k/kdsgibcbh.css';
import '../../css/a/aksnqjb2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uj6cy7lst"/><path class="v54vc0bdn"/><path class="kdsgibcbh"/><path class="aksnqjb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gem"} {...others} />);
}

export default Component;
