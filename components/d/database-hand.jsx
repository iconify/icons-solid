import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hx9jwpb-t.css';
import '../../css/c/cb6hoeb9u.css';
import '../../css/c/cl_mzjtei.css';
import '../../css/m/mvrjg2bys.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hx9jwpb-t"/><path class="cb6hoeb9u"/><path class="cl_mzjtei"/><path class="mvrjg2bys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:database-hand"} {...others} />);
}

export default Component;
