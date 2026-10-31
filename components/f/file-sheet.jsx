import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sjyrws3-o.css';
import '../../css/p/p8jb4enqb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/tzeznobms.css';
import '../../css/o/og1b02ckg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sjyrws3-o"/><path class="p8jb4enqb"/><g class="mc2zb0bvp"><rect class="tzeznobms"/><path class="og1b02ckg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:file-sheet"} {...others} />);
}

export default Component;
