import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/evikbhbio.css';
import '../../css/t/th6z15lxd.css';
import '../../css/e/e-_y97b5b.css';
import '../../css/o/o0s61pf4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="evikbhbio"/><path class="th6z15lxd"/><path class="e-_y97b5b"/><path class="o0s61pf4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-file-text"} {...others} />);
}

export default Component;
