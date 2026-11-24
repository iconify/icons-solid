import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebrv0fzxu.css';
import '../../css/y/yu6mxibig.css';
import '../../css/z/z4zlfpitj.css';
import '../../css/s/s82pcabcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ebrv0fzxu"/><path class="yu6mxibig"/><path class="z4zlfpitj"/><path class="s82pcabcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:jacket-duotone"} {...others} />);
}

export default Component;
