import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lw6pjpbun.css';
import '../../css/a/ab97rlr1v.css';
import '../../css/y/y_sj6qbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lw6pjpbun"/><path class="ab97rlr1v"/><path class="y_sj6qbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smart-watch-circle-graph-line"} {...others} />);
}

export default Component;
