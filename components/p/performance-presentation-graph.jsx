import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r2a_pl06n.css';
import '../../css/p/plca6s4vd.css';
import '../../css/z/zr33v6yek.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="r2a_pl06n"/><path class="plca6s4vd"/><path class="zr33v6yek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:performance-presentation-graph"} {...others} />);
}

export default Component;
