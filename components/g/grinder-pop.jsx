import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d6zyzrotw.css';
import '../../css/y/ym0_py_ug.css';
import '../../css/t/tvyqwpb4f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="d6zyzrotw"/><path class="ym0_py_ug"/><path clip-rule="evenodd" class="tvyqwpb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:grinder-pop"} {...others} />);
}

export default Component;
