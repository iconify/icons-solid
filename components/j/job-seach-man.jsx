import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sfgdgm2al.css';
import '../../css/a/anmlwpbfs.css';
import '../../css/h/h10thkb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sfgdgm2al"/><path class="anmlwpbfs"/><path class="h10thkb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:job-seach-man"} {...others} />);
}

export default Component;
