import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cddoteztz.css';
import '../../css/d/ds6outb7u.css';
import '../../css/e/e6pmp0b8v.css';
import '../../css/r/r1dv0f0sg.css';
import '../../css/j/jfigzne9w.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><path class="cddoteztz"/><g transform="translate(3 3)" class="ds6outb7u"><circle class="e6pmp0b8v"/><path class="r1dv0f0sg"/></g><path clip-rule="evenodd" class="jfigzne9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:person-circle-filled"} {...others} />);
}

export default Component;
