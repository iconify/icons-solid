import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i8fkcybso.css';
import '../../css/n/nqmf4jucg.css';
import '../../css/u/up8qf57js.css';
import '../../css/k/kbhprvbia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="i8fkcybso wm-shadow"/><path class="nqmf4jucg wm-shadow"/><path class="up8qf57js"/><path class="kbhprvbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:factory"} {...others} />);
}

export default Component;
