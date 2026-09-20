import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u0p54abal.css';
import '../../css/q/qtes1ccuu.css';
import '../../css/e/e-_y97b5b.css';
import '../../css/o/o0s61pf4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="u0p54abal"/><path class="qtes1ccuu"/><path class="e-_y97b5b"/><path class="o0s61pf4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-file-sheet"} {...others} />);
}

export default Component;
